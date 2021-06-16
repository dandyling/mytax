import { Container, Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import React from "react";

export const Reviews = () => {
  return (
    <Box
      as="section"
      height="6xl"
      width="100%"
      backgroundColor="white"
      py="32"
      px="64"
    >
      <Container maxWidth="180ch" position="relative">
        <Image
          position="absolute"
          top="0"
          right="0"
          src="/assets/love.png"
          alt="Woman in love with MyTax"
          width="55%"
        />
        <Flex
          position="absolute"
          flexDirection="column"
          backgroundColor="yellow.50"
          padding="24"
          width="55%"
          left="0"
          top="120px"
        >
          <Heading
            as="h2"
            textTransform="uppercase"
            fontSize="3xl"
            fontWeight="thin"
          >
            "Saves me time on filling tax that would normally takes me a few
            months to do!"
          </Heading>
          <Text
            mt="8"
            textTransform="uppercase"
            fontSize="3xl"
            fontWeight="thin"
          >
            ~ Lily
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
