import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink, useHistory } from "react-router-dom";
import { PRICE } from "../landing/home/Services";
import { useExemptionAmount } from "./ExemptionAmount";
import { QuestionType, useQuestion } from "./Question";

export const Done = () => {
  const { setQuestion } = useQuestion();
  const { amount } = useExemptionAmount();
  const history = useHistory();

  function handleNext() {
    setQuestion(QuestionType.GetStarted);
    history.push("/");
  }

  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="8"
    >
      <Heading as="h1" textAlign="center" fontSize="2xl" color="blackAlpha.700">
        Your tax exemption is RM {amount}
      </Heading>
      <Flex
        my="4"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text my="4" textAlign="center">
          Note - This is just a demo of what we can do. To purchase our service,
          click below:
        </Text>
        <Button
          as={ReactRouterLink}
          to="/purchase"
          backgroundColor="purple.500"
          color="white"
          size="lg"
          onClick={handleNext}
          maxWidth="80"
        >
          Purchase Service for RM {PRICE}
        </Button>
      </Flex>
    </Container>
  );
};
