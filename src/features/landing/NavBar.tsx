import {
  Button,
  Flex,
  FlexProps,
  Heading,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { PageLink } from "./Header";

interface NavBarProps extends FlexProps {
  links: PageLink[];
  isExpanded: boolean;
  onClickMenu(): void;
  isVertical?: boolean;
}

function NavBar(props: NavBarProps) {
  const { links, isExpanded, onClickMenu, isVertical, ...rest } = props;

  return (
    <Flex
      as="header"
      px="12"
      py="4"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="blackAlpha.700"
      {...rest}
    >
      <Flex className="navbar__start" alignItems="center">
        <Link _hover={{ textDecoration: "none" }}>
          <Heading
            as="h2"
            textTransform="uppercase"
            fontSize="4xl"
            fontWeight="thin"
            color="white"
          >
            MY-TAX
          </Heading>
        </Link>
        <IconButton
          className="navbar__menu"
          backgroundColor="transparent"
          color="white"
          fontSize="4xl"
          aria-label="Open menu"
          onClick={onClickMenu}
          display={isVertical ? "inline-flex" : "none"}
          icon={isExpanded ? <FaTimes /> : <FaBars />}
        />
      </Flex>
      {isExpanded && (
        <>
          <Flex className="navbar__middle" fontSize="2xl" color="white">
            {links.map((link, i) => {
              return (
                <Link
                  _hover={{ textDecoration: "none" }}
                  href={link.url}
                  mx="4"
                  key={`${i} - ${link.name}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </Flex>
          <Flex className="navbar__end" justifyContent="flex-end">
            <Button
              backgroundColor="purple.500"
              color="white"
              padding="8"
              size="lg"
              borderRadius="none"
            >
              <Text>Contact Us</Text>
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  );
}
export const ResponsiveNavBar = styled(NavBar)`
  ${(props) => {
    return props.isVertical
      ? `
      min-width: 100vw;
      min-height: ${props.isExpanded ? "100%" : "auto"};
      padding: 1rem 1.5rem;
      flex-direction: column;
      justify-content: space-between;
      background-color: ${props.isExpanded ? "white" : "rgba(0, 0, 0, 0)"};
      .navbar__start {
        justify-content: space-between;
        width: 100%;
        h2, button {
          color: black;
        }
      }
      .navbar__middle {
        flex-direction: column;
        justify-content: center;
        align-items:center;
        a {
          margin: 1rem 0px 1rem 0px;
          color: black;
        }
      }
      .navbar__end {
        flex-direction: column;
        justify-content: flex-end;
      }
  `
      : "";
  }}
`;