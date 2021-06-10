import { AspectRatio, Flex, Image } from "@chakra-ui/react";
import React from "react";
import IncomeTax from "./../assets/income-tax.jpg";

export const Home = () => {
  return (
    <Flex width="100%">
      <Flex as="header"></Flex>
      <Flex as="main" width="100%">
        <AspectRatio minWidth="100%" maxWidth="100%" ratio={8 / 3}>
          <Image src={IncomeTax} alt="Claim your tax" />
        </AspectRatio>
      </Flex>
      <Flex as="footer"></Flex>
    </Flex>
  );
};
