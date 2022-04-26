/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Game } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardF from "./CardF";
import { Collection } from "@aws-amplify/ui-react";
export default function Test(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Game,
        }).items;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Test")}
    >
      {(item, index) => (
        <CardF
          t={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CardF>
      )}
    </Collection>
  );
}
