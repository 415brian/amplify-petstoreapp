/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function GiveSuccess(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="256px"
      direction="column"
      width="390px"
      height="844px"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "GiveSuccess")}
      {...rest}
    >
      <View
        width="349px"
        height="198px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 421")}
      >
        <Image
          width="77px"
          height="78px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="136px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image 1")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="36px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="42px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="349px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="87px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Great give."
          {...getOverrideProps(overrides, "Great give.")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="317px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="150px"
          left="16px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="A recipient will automatically be chosen and you both will be notified."
          {...getOverrideProps(
            overrides,
            "A recipient will automatically be chosen and you both will be notified."
          )}
        ></Text>
      </View>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="40px 16px 40px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Post something else"
          {...getOverrideProps(overrides, "Button29766759")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          variation="default"
          children="Done"
          {...getOverrideProps(overrides, "Button37513319")}
        ></Button>
      </Flex>
    </Flex>
  );
}
