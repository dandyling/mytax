import {
  Box,
  Button,
  ButtonProps,
  Container,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { useExemptionAmount } from "./ExemptionAmount";
import { QuestionType, useQuestion } from "./Question";

export const Spouse = () => {
  const { goNext, question, setQuestion } = useQuestion();
  const { addAmount } = useExemptionAmount();
  return (
    <Container p="8">
      <OrderedList start={question}>
        <ListItem fontSize="2xl">
          <Heading as="h1" fontSize="2xl" color="blackAlpha.700">
            First question. Are you married?
          </Heading>
          <Flex py={8} flexDirection="column">
            <BoxButton
              my={1}
              leftContent="Y"
              onClick={() => {
                addAmount(9000);
                goNext();
              }}
            >
              Yes
            </BoxButton>
            <BoxButton
              my={1}
              leftContent="N"
              onClick={() => {
                addAmount(9000);
                setQuestion(QuestionType.ParentsMedical);
              }}
            >
              No
            </BoxButton>
          </Flex>
        </ListItem>
      </OrderedList>
    </Container>
  );
};

interface BoxButtonProps extends ButtonProps {
  leftContent: ReactNode;
  children: ReactNode;
}

export const BoxButton = (props: BoxButtonProps) => {
  const { leftContent, children, ...rest } = props;
  return (
    <Button
      display="flex"
      justifyContent="flex-start"
      padding="2"
      borderColor="blackAlpha.800"
      backgroundColor="orange.100"
      width="40"
      size="lg"
      {...rest}
    >
      <Box
        w={7}
        h={7}
        borderRadius={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="blackAlpha.800"
        color="white"
        fontSize="small"
      >
        {leftContent}
      </Box>
      <Text pl={2}>{children}</Text>
    </Button>
  );
};
