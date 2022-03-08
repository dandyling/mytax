import {
  Container,
  Flex,
  Heading,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import React from "react";
import { QuestionType, useQuestion } from "./Question";
import { BoxButton } from "./Spouse";

export const ParentsMedical = () => {
  const { question, goNext, setQuestion } = useQuestion();
  return (
    <Container p="8">
      <OrderedList start={question}>
        <ListItem fontSize="2xl">
          <Heading as="h1" fontSize="2xl" color="blackAlpha.700">
            Did you paid for your parents medical bills last year?
          </Heading>
          <Flex py={8} flexDirection="column">
            <BoxButton my={1} leftContent="Y" onClick={goNext}>
              Yes
            </BoxButton>
            <BoxButton
              my={1}
              leftContent="N"
              onClick={() => setQuestion(QuestionType.Done)}
            >
              No
            </BoxButton>
          </Flex>
        </ListItem>
      </OrderedList>
    </Container>
  );
};
