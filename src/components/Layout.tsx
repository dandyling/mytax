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
      width="100vw"
      height="100vh"
    >
      {children}
    </Flex>
  );
};
