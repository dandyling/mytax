import { Container, Flex, Heading, Button, Text } from "@chakra-ui/react";
import React from "react";

export const Hero = () => {
  return (
    <Flex
      as="section"
      bgImage="url('/assets/income-tax.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="3xl"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        backgroundColor="white"
        maxWidth="80ch"
        padding="16"
      >
        <Heading
          as="h1"
          color="purple.500"
          textTransform="uppercase"
          fontSize="5xl"
          fontWeight="normal"
          my="4"
        >
          Find it difficult to do e-filling? Let us do the heavy work for you
        </Heading>
        <Button
          backgroundColor="purple.500"
          color="white"
          padding="8"
          size="lg"
          my="8"
          borderRadius="none"
        >
          <Text>Purchase our service for RM 1</Text>
        </Button>
      </Container>
    </Flex>
  );
};
