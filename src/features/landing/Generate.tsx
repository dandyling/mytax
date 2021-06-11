import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const Generate = () => {
  return (
    <Flex as="section" justifyContent="center" alignItems="center" width="100%">
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        backgroundColor="white"
        maxWidth="120ch"
        padding="16"
      >
        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize="4xl"
          fontWeight="thin"
        >
          Just click next, and we will generate your e-filling tax exemptions
          for you
        </Heading>
      </Container>
    </Flex>
  );
};
