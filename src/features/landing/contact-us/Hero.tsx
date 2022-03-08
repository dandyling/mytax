import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export function Hero() {
  return (
    <Flex
      as="section"
      bgImage="url('/assets/contact-us.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height={["xl", null, "xl"]}
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
        backgroundColor="blackAlpha.700"
        maxWidth="80ch"
        width="auto"
        padding="8"
      >
        <Heading
          as="h1"
          color="white"
          textTransform="uppercase"
          fontSize="4xl"
          fontWeight="normal"
        >
          Contact us
        </Heading>
      </Container>
    </Flex>
  );
}
