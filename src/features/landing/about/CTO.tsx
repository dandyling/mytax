import {
  Container,
  Flex,
  Heading,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

export function CTO() {
  const isPortrait = useBreakpointValue({ base: true, md: false });

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
          Check out our services now
        </Heading>
        <Heading
          as="h3"
          fontSize="2xl"
          fontWeight="thin"
          fontStyle="italic"
          my="4"
        >
          Saves you time and money
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
          {isPortrait ? "Purchase" : "Purchase our service for RM 10"}
        </Button>
      </Container>
    </Flex>
  );
}
