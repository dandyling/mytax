import {
  Container,
  Flex,
  Heading,
  Input,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useExemptionAmount } from "./ExemptionAmount";
import { useQuestion } from "./Question";
import { BoxButton } from "./Spouse";

export const ParentsMedicalAmount = () => {
  const [value, setValue] = useState(0);
  const { question, goNext } = useQuestion();
  const { addAmount } = useExemptionAmount();
  return (
    <Container p="8">
      <OrderedList start={question}>
        <ListItem fontSize="2xl">
          <Heading as="h1" fontSize="2xl" color="blackAlpha.700">
            If yes, how much did you pay?
          </Heading>
          <Flex py={8} flexDirection="column">
            <Input
              value={value}
              type="number"
              padding="2"
              size="lg"
              width="40"
              color="blackAlpha.800"
              my={1}
              onChange={(e) => setValue(Number(e.currentTarget.value))}
            />
            <BoxButton
              my={1}
              leftContent="Y"
              onClick={() => {
                addAmount(value);
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
