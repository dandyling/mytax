import {
  Container,
  Flex,
  Heading,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import React from "react";
import { useExemptionAmount } from "./ExemptionAmount";
import { useQuestion } from "./Question";
import { BoxButton } from "./Spouse";

export const SpouseWorking = () => {
  const { question, goNext } = useQuestion();
  const { addAmount } = useExemptionAmount();
  return (
    <Container p="8">
      <OrderedList start={question}>
        <ListItem fontSize="2xl">
          <Heading as="h1" fontSize="2xl" color="blackAlpha.700">
            Does your spouse claim income tax exemption under his/her own name?
          </Heading>
          <Flex py={8} flexDirection="column">
            <BoxButton my={1} leftContent="Y" onClick={goNext}>
              Yes
            </BoxButton>
            <BoxButton
              my={1}
              leftContent="N"
              onClick={() => {
                addAmount(4000);
                goNext();
              }}
            >
              No
            </BoxButton>
          </Flex>
        </ListItem>
      </OrderedList>
    </Container>
  );
};
