import { Flex, Heading, Button, Text, Link, FlexProps } from "@chakra-ui/react";
import React from "react";

export const Header = (props: FlexProps) => {
  return (
    <Flex
      as="header"
      py="4"
      px="12"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="blackAlpha.700"
      {...props}
    >
      <Link _hover={{ textDecoration: "none" }}>
        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize="4xl"
          fontWeight="thin"
          margin="4"
          color="white"
        >
          MY-TAX
        </Heading>
      </Link>
      <Flex fontSize="2xl" color="white">
        <Link _hover={{ textDecoration: "none" }} mx="4">
          About Us
        </Link>
        <Link _hover={{ textDecoration: "none" }} mx="4">
          Our Services
        </Link>
        <Link _hover={{ textDecoration: "none" }}>Blog</Link>
      </Flex>
      <Button
        backgroundColor="purple.500"
        color="white"
        padding="8"
        size="lg"
        borderRadius="none"
      >
        <Text>Contact Us</Text>
      </Button>
    </Flex>
  );
};
