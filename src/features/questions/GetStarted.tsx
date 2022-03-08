import { Button, Container, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as ClockSVG } from "./../../assets/clock.svg";
import { useExemptionAmount } from "./ExemptionAmount";
import { useQuestion } from "./Question";

export const GetStarted = () => {
  const { goNext } = useQuestion();
  const { reset } = useExemptionAmount();
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="8"
    >
      <Heading as="h1" textAlign="center" fontSize="2xl" color="blackAlpha.700">
        How much is your income tax exemption?
      </Heading>
      <Heading
        as="h2"
        fontSize="xl"
        textAlign="center"
        fontWeight="normal"
        py="4"
        color="blackAlpha.500"
      >
        Curious about how to calculate your income tax exemption? Just answer a
        few questions, and we will calculate it for you 😊😊
      </Heading>
      <Button
        my="8"
        backgroundColor="purple.500"
        color="white"
        size="lg"
        onClick={() => {
          reset();
          goNext();
        }}
      >
        Continue
      </Button>
      <Flex alignItems="center" justifyContent="center">
        <Icon as={ClockSVG} fontSize="small" mt="0.5" />
        <Text ml={1} fontSize="small">
          Takes 1 min
        </Text>
      </Flex>
    </Container>
  );
};
