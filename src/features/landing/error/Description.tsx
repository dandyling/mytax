import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

export function Description() {
  return (
    <Flex as="section" justifyContent="center" alignItems="center" width="100%">
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="left"
        backgroundColor="white"
        maxWidth="120ch"
        fontSize={["2xl", null, "3xl"]}
        padding={[8, null, 16]}
      >
        <Text
          textAlign="center"
          marginTop="8"
          fontWeight={["normal", null, "thin"]}
        >
          We have received an error. You credit card have not been charged.
        </Text>
        <Text textAlign="center" my={"4"} fontWeight={["normal", null, "thin"]}>
          Please wait a while before trying again
        </Text>
      </Container>
    </Flex>
  );
}
