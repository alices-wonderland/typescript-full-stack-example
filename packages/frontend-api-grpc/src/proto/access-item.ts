/* eslint-disable */
// @generated by protobuf-ts 2.7.0 with parameter eslint_disable,ts_nocheck,optimize_code_size
// @generated from protobuf file "access-item.proto" (package "whiterabbit.accessItem", syntax proto3)
// tslint:disable
// @ts-nocheck
import { StringValue } from "./google/protobuf/wrappers";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { PageInfo } from "./shared";
/**
 * @generated from protobuf message whiterabbit.accessItem.AccessItem
 */
export interface AccessItem {
  /**
   * @generated from protobuf field: whiterabbit.accessItem.AccessItemType type = 1;
   */
  type: AccessItemType;
  /**
   * @generated from protobuf field: string id = 2;
   */
  id: string;
  /**
   * @generated from protobuf field: string name = 3;
   */
  name: string;
}
/**
 * @generated from protobuf message whiterabbit.accessItem.AccessItemPage
 */
export interface AccessItemPage {
  /**
   * @generated from protobuf field: whiterabbit.shared.PageInfo pageInfo = 1;
   */
  pageInfo?: PageInfo;
  /**
   * @generated from protobuf field: repeated whiterabbit.accessItem.AccessItemItem items = 2;
   */
  items: AccessItemItem[];
}
/**
 * @generated from protobuf message whiterabbit.accessItem.AccessItemItem
 */
export interface AccessItemItem {
  /**
   * @generated from protobuf field: string cursor = 1;
   */
  cursor: string;
  /**
   * @generated from protobuf field: whiterabbit.accessItem.AccessItem data = 2;
   */
  data?: AccessItem;
}
/**
 * @generated from protobuf message whiterabbit.accessItem.AccessItemResponse
 */
export interface AccessItemResponse {
  /**
   * @generated from protobuf field: whiterabbit.accessItem.AccessItem item = 1;
   */
  item?: AccessItem;
}
/**
 * @generated from protobuf enum whiterabbit.accessItem.AccessItemType
 */
export enum AccessItemType {
  /**
   * @generated from protobuf enum value: USER = 0;
   */
  USER = 0,
  /**
   * @generated from protobuf enum value: GROUP = 1;
   */
  GROUP = 1,
}
// @generated message type with reflection information, may provide speed optimized methods
class AccessItem$Type extends MessageType<AccessItem> {
  constructor() {
    super("whiterabbit.accessItem.AccessItem", [
      {
        no: 1,
        name: "type",
        kind: "enum",
        T: () => ["whiterabbit.accessItem.AccessItemType", AccessItemType],
      },
      { no: 2, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message whiterabbit.accessItem.AccessItem
 */
export const AccessItem = new AccessItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AccessItemPage$Type extends MessageType<AccessItemPage> {
  constructor() {
    super("whiterabbit.accessItem.AccessItemPage", [
      { no: 1, name: "pageInfo", kind: "message", T: () => PageInfo },
      {
        no: 2,
        name: "items",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => AccessItemItem,
      },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message whiterabbit.accessItem.AccessItemPage
 */
export const AccessItemPage = new AccessItemPage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AccessItemItem$Type extends MessageType<AccessItemItem> {
  constructor() {
    super("whiterabbit.accessItem.AccessItemItem", [
      { no: 1, name: "cursor", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "data", kind: "message", T: () => AccessItem },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message whiterabbit.accessItem.AccessItemItem
 */
export const AccessItemItem = new AccessItemItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AccessItemResponse$Type extends MessageType<AccessItemResponse> {
  constructor() {
    super("whiterabbit.accessItem.AccessItemResponse", [
      { no: 1, name: "item", kind: "message", T: () => AccessItem },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message whiterabbit.accessItem.AccessItemResponse
 */
export const AccessItemResponse = new AccessItemResponse$Type();
/**
 * @generated ServiceType for protobuf service whiterabbit.accessItem.AccessItemService
 */
export const AccessItemService = new ServiceType(
  "whiterabbit.accessItem.AccessItemService",
  [
    {
      name: "findAll",
      serverStreaming: true,
      options: {},
      I: StringValue,
      O: AccessItem,
    },
  ]
);
