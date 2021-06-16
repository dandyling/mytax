import { Flex } from "@chakra-ui/react";
import React from "react";
import { CTO } from "./CTO";
import { Demo } from "./Demo";
import { Footer } from "../../components/Footer";
import { Generate } from "./Generate";
import { Hero } from "./Hero";
import { Reviews } from "./Reviews";
import { Services } from "./Services";
import { Header } from "./Header";
import { Layout } from "../../components/Layout";

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

export const Home = () => {
  return (
    <Layout position="relative">
      <Flex
        width="100%"
        position="absolute"
        top="0"
        left="0"
        flexDirection="column"
      >
        <Flex as="main" flexDirection="column" width="100%">
          <Hero />
          <Generate />
          <Demo />
          <Services />
          <Reviews />
          <CTO />
        </Flex>
        <Footer />
      </Flex>
      <Header width="100%" position="absolute" top="0" left="0" />
    </Layout>
  );
};
