import { Flex, Heading, Text, Link } from "@chakra-ui/react";
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
        fontSize="3xl"
        fontWeight="thin"
        my="16"
      >
        MYTAX
      </Heading>
      <Flex
        justifyContent="flex-start"
        alignItems="flex-start"
        textAlign="center"
        width="100%"
      >
        <Flex
          my="8"
          flex="1"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="2xl" textTransform="uppercase" my="4">
            Location
          </Text>
          <Text fontSize="xl" my="4">
            12C-11-4, One Foresta, Lengkok Kelicap, 11900, Sungai Ara, Penang
          </Text>
        </Flex>
        <Flex
          my="8"
          flex="1"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="2xl" textTransform="uppercase" my="4">
            Contact
          </Text>
          <Text fontSize="xl" mt="4">
            (016) 490-5276
          </Text>
          <Text fontSize="xl" mb="4">
            dandyling@gmail.com
          </Text>
        </Flex>
        <Flex
          my="8"
          flex="1"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="2xl" textTransform="uppercase" my="4">
            Follow
          </Text>
          <Link fontSize="xl" mt="4">
            Instagram
          </Link>
          <Link fontSize="xl" mb="4">
            Facebook
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
