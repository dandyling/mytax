import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding="16"
    >
      <Heading
        as="h3"
        textTransform="uppercase"
        fontSize="2xl"
        fontWeight={["medium", null, "thin"]}
        my={[4, null, 8]}
      >
        MYTAX
      </Heading>
      <Flex
        flexDirection={["column", null, "row"]}
        justifyContent="flex-start"
        alignItems={["center", null, "flex-start"]}
        textAlign="center"
        width="100%"
      >
        <Flex
          my={[4, null, 8]}
          flex="1"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" textTransform="uppercase" my="4">
            Location
          </Text>
          <Text fontSize="medium" my="4">
            12C-11-4, One Foresta, Lengkok Kelicap, 11900, Sungai Ara, Penang
          </Text>
        </Flex>
        <Flex
          my={[4, null, 8]}
          flex="1"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" textTransform="uppercase" my="4">
            Contact
          </Text>
          <Text fontSize="medium" mt="4">
            (016) 490-5276
          </Text>
          <Text fontSize="medium" mb="4">
            dandyling@gmail.com
          </Text>
        </Flex>
        <Flex
          my={[4, null, 8]}
          flex="1"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" textTransform="uppercase" my="4">
            Follow
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
