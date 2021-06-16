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
    name: "Our Services",
    url: "/",
  },
  {
    name: "Contact Us",
    url: "/",
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
