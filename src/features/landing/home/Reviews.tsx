import { Container, Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import React from "react";

export const Reviews = () => {
  return (
    <Box
      as="section"
      height={["400px", null, "4xl"]}
      width="100%"
      backgroundColor="white"
      py={[8, null, 32]}
      px={[4, null, 64]}
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
          padding={[4, null, 24]}
          width="55%"
          left="0"
          top="120px"
        >
          <Heading
            as="h2"
            textTransform={["none", null, "uppercase"]}
            fontSize={["large", null, "3xl"]}
            fontWeight={["medium", null, "thin"]}
          >
            "Saves me time on filling tax that would normally takes me a few
            months to do!"
          </Heading>
          <Text
            mt={[1, null, 8]}
            textTransform="uppercase"
            fontSize={["medium", null, "3xl"]}
            fontWeight={["medium", null, "thin"]}
          >
            ~ Lily
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
