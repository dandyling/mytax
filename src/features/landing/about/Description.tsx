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
        <Text my={[4, null, 8]} fontWeight={["normal", null, "thin"]}>
          We are a team of professionals who would like to make your life
          better. We believe that paying tax should be a sweet experience, not
          one you should be dreading every year. Thus, we strive to make a
          difference so that your life can be better.
        </Text>
        <Text my={[4, null, 8]} fontWeight={["normal", null, "thin"]}>
          Faced with the same problem as you do, we were frustrated by the
          user-unfriendliness of the user interface of the e-filing website.
          Thus, we created this platform so that you can easily pay your tax
          every year by just answering a few questions. Never again you will be
          frustrated by the income tax payment in your country.
        </Text>
      </Container>
    </Flex>
  );
}
