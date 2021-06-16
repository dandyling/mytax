import { Container, Flex, Heading, Button, Grid, Text } from "@chakra-ui/react";
import React from "react";

interface Post {
  name: string;
  description: string;
}

export const posts: Post[] = [
  {
    name: "User-Friendly",
    description: "Just click next and we will calculate the tax for you",
  },
  {
    name: "Quality & Fast",
    description:
      "Calculate your tax exemptions in just minutes instead of days or even months",
  },
  {
    name: "Reasonable Price",
    description: "Settle your income tax for just RM 1",
  },
  {
    name: "Clean Salary Calculation",
    description: "We will calculate your tax given your salary and bonus",
  },
  {
    name: "Includes Tax Exemptions Changes",
    description:
      "Tired of all the different tax-exemptions categories based on different year? We will do the hard job for you",
  },
  {
    name: "Certified Accounting",
    description:
      "All our tax calculations are certified by audited accountants",
  },
];

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
