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
    description: "Settle your income tax for just RM 10",
  },
  {
    name: "Net Salary Calculation",
    description: "We will calculate your clean salary minus tax",
  },
  {
    name: "Updated Tax Exemptions Changes Every Year",
    description:
      "Tired of keeping track of all the different tax-exemptions every year? Leave it to us",
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
        padding={[8, null, 16]}
        maxWidth="180ch"
      >
        <Heading
          as="h2"
          color="purple.500"
          textTransform="uppercase"
          fontSize="3xl"
          fontWeight={["normal", null, "thin"]}
          my={[8, 0, 16]}
        >
          Why use our service?
        </Heading>
        <Grid
          gridTemplateColumns={["1fr", null, "repeat(3, 1fr)"]}
          gridAutoRows="auto"
          width="100%"
        >
          {posts.map((p, i) => {
            return (
              <Flex
                my={[8, null, 16]}
                mx={[4, null, 8]}
                direction="column"
                key={`${i} - ${p.name}`}
              >
                <Heading
                  as="h3"
                  color="purple.500"
                  fontSize="xl"
                  fontWeight={["semibold", null, "thin"]}
                  fontStyle="italic"
                  textTransform="uppercase"
                >
                  {p.name}
                </Heading>
                <Text fontSize="medium" my={[8, null, 8]}>
                  {p.description}
                </Text>
              </Flex>
            );
          })}
        </Grid>
        <Button
          backgroundColor="purple.500"
          color="white"
          padding="8"
          size="lg"
          my="8"
          fontSize="xl"
          borderRadius="none"
        >
          Learn More
        </Button>
      </Container>
    </Flex>
  );
};