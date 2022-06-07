import { Flex } from "@chakra-ui/react";
import React from "react";
import { GetTax } from "../../questions/GetTax";

export const Product = () => {
  return (
    <Flex
      as="section"
      bgImage="url('/assets/income-tax.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height={"100%"}
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <GetTax />
    </Flex>
  );
};
