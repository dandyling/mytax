import { Flex } from "@chakra-ui/react";
import React from "react";

export const Demo = () => {
  return (
    <Flex
      as="section"
      bgImage="url('/assets/individual-claim.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="xl"
      justifyContent="center"
      alignItems="center"
      width="100%"
    />
  );
};
