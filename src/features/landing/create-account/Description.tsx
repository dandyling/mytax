import { Container, Flex, Text, Image } from "@chakra-ui/react";
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
          Are you a personal business owner (grab driver, food panda driver or
          freelancer etc?) Filling the e-B form but not sure how to fill the
          "Trading, Profit and Loss Account" in the e-filling website? Don't
          worry, we have you covered.
          <Flex
            width={"100%"}
            justifyContent="center"
            paddingTop="16"
            paddingBottom={"8"}
          >
            <Image
              borderWidth={1}
              borderStyle="solid"
              borderColor={"blackAlpha.700"}
              paddingBottom={"4"}
              src="/assets/profit-and-loss.jpeg"
              borderRadius={"md"}
            />
          </Flex>
        </Text>
        <Text my={[4, null, 8]} fontWeight={["normal", null, "thin"]}>
          The "Trading, Profit and Loss Account" requires you to fill in an
          account of your incomes as well as expenditures for the year, in order
          to determine the net profit of your business. Usually, this requires a
          certified accountant to do an account of your business.
        </Text>
        <Text my={[4, null, 8]} fontWeight={["normal", null, "thin"]}>
          Thus, hire our personal accountant to create the profit and loss
          account for you. With this spreadsheet account, you can easily submit
          it to the e-filing website
        </Text>
      </Container>
    </Flex>
  );
}
