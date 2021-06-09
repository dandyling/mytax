import {
  Container,
  Flex,
  Heading,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import React from "react";
import { useQuestion } from "./Question";
import { BoxButton } from "./Spouse";

export const ParentsMedical = () => {
  const { question, goNext } = useQuestion();
  return (
    <Container p="8">
      <OrderedList start={question}>
        <ListItem fontSize="2xl">
          <Heading as="h1" fontSize="2xl" color="blackAlpha.700">
            Did your parents paid for medical expenses last year?
          </Heading>
          <Flex py={8} flexDirection="column">
            <BoxButton my={1} leftContent="Y" onClick={goNext}>
              Yes
            </BoxButton>
            <BoxButton my={1} leftContent="N" onClick={goNext}>
              No
            </BoxButton>
          </Flex>
        </ListItem>
      </OrderedList>
    </Container>
  );
};
