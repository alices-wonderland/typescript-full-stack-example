import { promises as fs } from "fs";
import { ChildProcess, exec } from "child_process";
import { build as electronBuild, Platform } from "electron-builder";
import treeKill from "tree-kill";
import { build as esbuild } from "../../esbuild.config";
import tsconfig from "./tsconfig.json";

const main = async (): Promise<void> => {
  await esbuild(
    tsconfig,
    {
      external: ["pg-hstore", "electron"],
      entryPoints: ["src/index.ts", "src/preload.ts"],
    },
    {
      start: () => {
        return exec("yarn dev:electron", (err) => {
          if (err != null) {
            console.log("[@white-rabbit/app-desktop] Killed dev:electron");
          }
        });
      },
      stop: (process: ChildProcess) => {
        console.log("[@white-rabbit/app-desktop] Kill node process");
        process.stdout?.destroy();
        process.stderr?.destroy();
        if (process.pid != null) {
          treeKill(process.pid, (err?: Error) => {
            if (err != null) {
              console.error(
                "[@white-rabbit/app-desktop] Error when treeKill: ",
                err
              );
            }
          });
        }
      },
    },
    false
  );
  if (process.env.NODE_ENV === "production") {
    try {
      await fs.cp("../desktop-render/dist", "./dist", { recursive: true });
      await fs.cp("./dist", "./app/dist", { recursive: true });
    } catch (e) {
      console.error(
        "[@white-rabbit/desktop] Failed to copy built result from @project/desktop-render",
        e
      );
      process.exit(1);
    }
    await electronBuild({
      targets: Platform.current().createTarget(),
      config: {
        productName: "white-rabbit",
        appId: "com.ukonnra.wonderland.whiterabbit",
        files: ["dist"],
        directories: {
          output: "release",
        },
        releaseInfo: {
          releaseName: "white-rabbit",
        },
        win: {
          target: ["zip"],
        },
        linux: {
          target: ["AppImage"],
        },
      },
    });
  }
  if (!process.argv.includes("--watch")) {
    process.exit();
  }
};

void main();
