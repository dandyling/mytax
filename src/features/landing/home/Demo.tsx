import {
  Button,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export function Demo() {
  const isPortrait = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      as="section"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      py="16"
      px={[4, null, 32]}
      textAlign="center"
    >
      <Heading
        as="h1"
        color="purple.500"
        textTransform="uppercase"
        fontSize={["3xl", null, "4xl"]}
        fontWeight="normal"
        my="4"
      >
        Just click next, and we will generate your e-filling tax exemptions for
        you
      </Heading>
      <Button
        as={Link}
        to="/purchase"
        backgroundColor="purple.500"
        color="white"
        padding="8"
        size="lg"
        my="8"
        borderRadius="none"
      >
        <Text
          fontSize="xl"
          fontWeight="semibold"
          size="large"
          textTransform={isPortrait ? "uppercase" : "none"}
        >
          {isPortrait ? "Purchase" : "Purchase our service for RM 25 only"}
        </Text>
      </Button>
    </Flex>
  );
}
