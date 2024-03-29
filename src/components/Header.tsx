import { FlexProps, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ResponsiveNavBar } from "./NavBar";

export interface PageLink {
  name: string;
  url: string;
}

const pageLinks: PageLink[] = [
  {
    name: "About Us",
    url: "/about-us",
  },
  {
    name: "Demo",
    url: "/get-your-tax",
  },
  {
    name: "Trading, Profit and Loss Account",
    url: "/trading-profit-and-loss-account",
  },
  {
    name: "Our Services",
    url: "/#services",
  },
  {
    name: "Contact Us",
    url: "/contact-us",
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
