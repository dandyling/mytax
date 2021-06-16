import { Flex, FlexProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Header } from "./Header";
import { HeaderZIndex } from "../styles/zIndex";

interface LayoutProps extends FlexProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Flex
      color="blackAlpha.700"
      direction="column"
      width="100vw"
      height="100vh"
      position="relative"
    >
      <Header
        width="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex={HeaderZIndex}
      />
      <Flex
        as="main"
        width="100%"
        position="absolute"
        top="0"
        left="0"
        flexDirection="column"
      >
        {children}
      </Flex>
    </Flex>
  );
};
