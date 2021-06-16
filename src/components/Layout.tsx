import { Flex, FlexProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface LayoutProps extends FlexProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children, ...rest } = props;
  return (
    <Flex
      color="blackAlpha.700"
      direction="column"
      width="100vw"
      height="100vh"
      {...rest}
    >
      {children}
    </Flex>
  );
};
