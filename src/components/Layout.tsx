import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Flex
      color="blackAlpha.700"
      direction="column"
      as="main"
      width="100vw"
      height="100vh"
      backgroundColor="orange.50"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Flex>
  );
};
