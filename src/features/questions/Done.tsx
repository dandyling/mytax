import { Button, Container, Heading } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { QuestionType, useQuestion } from "./Question";

export const Done = () => {
  const { setQuestion } = useQuestion();
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
        Your tax exemption is RM 9000
      </Heading>
      <Button
        my="8"
        backgroundColor="purple.500"
        color="white"
        size="lg"
        onClick={handleNext}
      >
        Finish
      </Button>
    </Container>
  );
};
