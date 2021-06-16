import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export function Demo() {
  return (
    <Flex
      as="section"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      py="16"
      px="32"
      textAlign="center"
    >
      <Heading
        as="h1"
        color="purple.500"
        textTransform="uppercase"
        fontSize="4xl"
        fontWeight="normal"
        my="4"
      >
        Just click next, and we will generate your e-filling tax exemptions for
        you
      </Heading>
      <Button
        as={Link}
        to="/get-your-tax"
        backgroundColor="purple.500"
        color="white"
        padding="8"
        size="lg"
        my="8"
        borderRadius="none"
      >
        <Text fontSize="xl" fontWeight="semibold" size="large">
          Purchase our service for RM 10 only
        </Text>
      </Button>
    </Flex>
  );
}
