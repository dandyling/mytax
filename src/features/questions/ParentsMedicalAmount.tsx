import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  ListItem,
  OrderedList,
  Text,
  theme,
  useNumberInput,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useExemptionAmount } from "./ExemptionAmount";
import { useQuestion } from "./Question";
import { BoxButton } from "./Spouse";

export const ParentsMedicalAmount = () => {
  const { question, goNext } = useQuestion();
  const [isDirty, setIsDirty] = useState(false);
  const { addAmount } = useExemptionAmount();
  const {
    valueAsNumber,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 0,
    min: 0,
    max: 8000,
    precision: 2,
  });

  const { onClick: onIncrementClick, ...inc } = getIncrementButtonProps();
  const { onClick: onDecrementClick, ...dec } = getDecrementButtonProps();
  const input = getInputProps();

  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    onClick: any
  ) => {
    if (!isDirty) {
      setIsDirty((value) => !value);
    }
    if (onClick) {
      onClick(event);
    }
  };

  const isNoValue = valueAsNumber <= 0;
  const isInvalid = isNoValue && isDirty;
  return (
    <Container p="8">
      <OrderedList start={question}>
        <ListItem fontSize="2xl">
          <Heading as="h1" fontSize="2xl" color="blackAlpha.700">
            If yes, how much did you pay?
          </Heading>
          <Flex py={8} flexDirection="column">
            <Flex flexDirection="column" maxW="200px" marginBottom={8}>
              <HStack
                css={`
                  button {
                    color: ${theme.colors.blackAlpha[800]};
                    background-color: ${theme.colors.orange[100]};
                  }
                `}
              >
                <Button
                  {...inc}
                  onClick={(e) => handleChange(e, onIncrementClick)}
                >
                  +
                </Button>
                <Input {...input} isInvalid={isInvalid} />
                <Button
                  {...dec}
                  onClick={(e) => handleChange(e, onDecrementClick)}
                >
                  -
                </Button>
              </HStack>
              {isInvalid && (
                <Text color="red" fontSize="sm">
                  Please enter amount
                </Text>
              )}
            </Flex>
            <BoxButton
              my={1}
              leftContent="Y"
              onClick={() => {
                if (!isInvalid) {
                  addAmount(valueAsNumber);
                  goNext();
                }
              }}
            >
              Confirm
            </BoxButton>
          </Flex>
        </ListItem>
      </OrderedList>
    </Container>
  );
};
