import { Container, Flex, Heading, Button } from "@chakra-ui/react";
import React from "react";

export const CTO = () => {
  return (
    <Flex
      as="section"
      justifyContent="center"
      alignItems="center"
      backgroundColor="yellow.50"
      width="100%"
    >
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        maxWidth="120ch"
        padding="16"
      >
        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize="3xl"
          fontWeight="thin"
          my="4"
        >
          Check it out now
        </Heading>
        <Heading
          as="h3"
          fontSize="2xl"
          fontWeight="thin"
          fontStyle="italic"
          my="4"
        >
          Only for RM 10
        </Heading>
        <Button
          backgroundColor="purple.500"
          color="white"
          padding="8"
          size="lg"
          my="8"
          fontSize="xl"
          borderRadius="none"
        >
          Buy Now
        </Button>
      </Container>
    </Flex>
  );
};
