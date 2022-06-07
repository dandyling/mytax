import { FlexProps, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ResponsiveNavBar } from "./NavBar";

export interface PageLink {
  name: string;
  url: string;
}

const pageLinks: PageLink[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Trading, Profit and Loss Account",
    url: "/trading-profit-and-loss-account",
  },
  {
    name: "Demo",
    url: "/get-your-tax",
  },
  {
    name: "Contact Us",
    url: "/contact-us",
  },
  {
    name: "About Us",
    url: "/about-us",
  },
];

export const Header = (props: FlexProps) => {
  const isVertical = useBreakpointValue({ base: true, md: false });

  const [expand, setExpand] = useState(false);

  useEffect(() => {
    setExpand(!isVertical);
  }, [isVertical]);

  function toggleExpand() {
    setExpand((value) => !value);
  }

  return (
    <ResponsiveNavBar
      links={pageLinks}
      isVertical={isVertical}
      isExpanded={expand}
      onClickMenu={toggleExpand}
      {...props}
    />
  );
};
