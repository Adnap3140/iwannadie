/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Game } from "../models";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  StepperField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function SetGame(props) {
  const { game, overrides, ...rest } = props;
  const [
    textFieldThreeZeroSevenEightThreeZeroEightFourValue,
    setTextFieldThreeZeroSevenEightThreeZeroEightFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeZeroSevenEightThreeZeroEightFiveValue,
    setTextFieldThreeZeroSevenEightThreeZeroEightFiveValue,
  ] = useStateMutationAction("");
  const [stepperFieldValue, setStepperFieldValue] =
    useStateMutationAction(undefined);
  const [
    textFieldThreeZeroSevenEightThreeZeroEightSixValue,
    setTextFieldThreeZeroSevenEightThreeZeroEightSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeZeroSevenEightThreeZeroEightSevenValue,
    setTextFieldThreeZeroSevenEightThreeZeroEightSevenValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {
      name: textFieldThreeZeroSevenEightThreeZeroEightFourValue,
      description: textFieldThreeZeroSevenEightThreeZeroEightFiveValue,
      rating: stepperFieldValue,
      imageLink: textFieldThreeZeroSevenEightThreeZeroEightSixValue,
      purchaseLink: textFieldThreeZeroSevenEightThreeZeroEightSevenValue,
    },
    id: game?.id,
    model: Game,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="774px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SetGame")}
    >
      <Flex
        gap="24px"
        direction="column"
        height="774px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Post"
            {...getOverrideProps(overrides, "Create Post")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider30783079")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload New Image"
            {...getOverrideProps(overrides, "Upload New Image")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          height="448px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="name"
            placeholder="Monopoly"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeZeroSevenEightThreeZeroEightFourValue}
            onChange={(event) => {
              setTextFieldThreeZeroSevenEightThreeZeroEightFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30783084")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="description"
            placeholder="A family game all can enjoy!"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeZeroSevenEightThreeZeroEightFiveValue}
            onChange={(event) => {
              setTextFieldThreeZeroSevenEightThreeZeroEightFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30783085")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="image link"
            placeholder="link here"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeZeroSevenEightThreeZeroEightSixValue}
            onChange={(event) => {
              setTextFieldThreeZeroSevenEightThreeZeroEightSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30783086")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="purchase link"
            placeholder="amazon.com"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeZeroSevenEightThreeZeroEightSevenValue}
            onChange={(event) => {
              setTextFieldThreeZeroSevenEightThreeZeroEightSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30783087")}
          ></TextField>
          <StepperField
            display="flex"
            gap="8px"
            direction="column"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="rating"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={stepperFieldValue}
            onStepChange={(value) => setStepperFieldValue(value)}
            {...getOverrideProps(overrides, "StepperField")}
          ></StepperField>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider30783089")}
        ></Divider>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
