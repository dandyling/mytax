import { Container, Flex, Heading, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <Flex
      as="section"
      bgImage="url('/assets/income-tax.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height={["2xl", null, "3xl"]}
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
        backgroundColor={["blackAlpha.800", null, "white"]}
        maxWidth={["85%", null, "80ch"]}
        padding={[4, null, 16]}
      >
        <Heading
          as="h1"
          color={["white", null, "purple.500"]}
          textTransform="uppercase"
          fontSize={["4xl"]}
          fontWeight="normal"
          my="4"
        >
          Find it difficult to do e-Filing? Let us do the heavy work for you
        </Heading>
        <Button
          as={Link}
          to="get-your-tax"
          backgroundColor="purple.500"
          color="white"
          padding="8"
          size="lg"
          my="8"
          borderRadius="none"
        >
          <Text
            fontSize="medium"
            textTransform="uppercase"
            fontWeight="semibold"
          >
            Try it out now!
          </Text>
        </Button>
      </Container>
    </Flex>
  );
};
