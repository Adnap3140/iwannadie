/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Game } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type CreateDatComponentProps = React.PropsWithChildren<Partial<FlexProps> & {
    game?: Game;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function CreateDatComponent(props: CreateDatComponentProps): React.ReactElement;
