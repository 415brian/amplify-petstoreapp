/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GiveSuccessOverridesProps = {
    GiveSuccess?: PrimitiveOverrideProps<FlexProps>;
    "Frame 421"?: PrimitiveOverrideProps<ViewProps>;
    "image 1"?: PrimitiveOverrideProps<ImageProps>;
    "Great give."?: PrimitiveOverrideProps<TextProps>;
    "A recipient will automatically be chosen and you both will be notified."?: PrimitiveOverrideProps<TextProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Button29766759?: PrimitiveOverrideProps<ButtonProps>;
    Button37513319?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type GiveSuccessProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: GiveSuccessOverridesProps | undefined | null;
}>;
export default function GiveSuccess(props: GiveSuccessProps): React.ReactElement;
