import { Container, Flex, Heading, Button, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { posts } from "./Home";

export const Services = () => {
  return (
    <Flex
      as="section"
      justifyContent="center"
      alignItems="center"
      width="100%"
      backgroundColor="yellow.50"
    >
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        padding="16"
        maxWidth="180ch"
      >
        <Heading
          as="h2"
          color="purple.500"
          textTransform="uppercase"
          fontSize="4xl"
          fontWeight="thin"
          my="16"
        >
          Our Services
        </Heading>
        <Grid
          gridTemplateColumns="repeat(3, 1fr)"
          gridAutoRows="auto"
          width="100%"
        >
          {posts.map((p, i) => {
            return (
              <Flex my="16" mx="8" direction="column" key={`${i} - ${p.name}`}>
                <Heading
                  as="h3"
                  color="purple.500"
                  fontSize="2xl"
                  fontWeight="thin"
                  fontStyle="italic"
                  textTransform="uppercase"
                >
                  {p.name}
                </Heading>
                <Text fontSize="xl" my="8">
                  {p.description}
                </Text>
              </Flex>
            );
          })}
        </Grid>
        <Button
          backgroundColor="purple.500"
          color="white"
          padding="12"
          size="lg"
          my="8"
          fontSize="2xl"
          borderRadius="none"
        >
          Learn More
        </Button>
      </Container>
    </Flex>
  );
};
