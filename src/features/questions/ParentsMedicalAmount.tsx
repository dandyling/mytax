import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  ListItem,
  OrderedList,
  theme,
  useNumberInput,
} from "@chakra-ui/react";
import React from "react";
import { useExemptionAmount } from "./ExemptionAmount";
import { useQuestion } from "./Question";
import { BoxButton } from "./Spouse";

export const ParentsMedicalAmount = () => {
  const { question, goNext } = useQuestion();
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

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <Container p="8">
      <OrderedList start={question}>
        <ListItem fontSize="2xl">
          <Heading as="h1" fontSize="2xl" color="blackAlpha.700">
            If yes, how much did you pay?
          </Heading>
          <Flex py={8} flexDirection="column">
            <HStack
              maxW="200px"
              marginBottom={8}
              css={`
                button {
                  color: ${theme.colors.blackAlpha[800]};
                  background-color: ${theme.colors.orange[100]};
                }
              `}
            >
              <Button {...inc}>+</Button>
              <Input {...input} />
              <Button {...dec}>-</Button>
            </HStack>
            <BoxButton
              my={1}
              leftContent="Y"
              onClick={() => {
                addAmount(valueAsNumber);
                goNext();
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
