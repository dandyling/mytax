import { Button, Container, Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export function CTO() {
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
          Contact us through WhatsApp
        </Heading>
        <Button
          as={Link}
          href="https://wa.me/60164905276"
          leftIcon={<FaWhatsapp fontSize="1.5rem" />}
          backgroundColor="purple.500"
          color="white"
          padding="8"
          size="lg"
          my="8"
          fontSize="xl"
          borderRadius="none"
          target="_blank"
        >
          Contact Us
        </Button>
      </Container>
    </Flex>
  );
}
