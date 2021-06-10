import { Flex } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../components/Layout";
import { GetStarted } from "./GetStarted";
import { ParentsMedical } from "./ParentsMedical";
import { QuestionType, useQuestion } from "./Question";
import { Spouse } from "./Spouse";

export const GetTax = () => {
  const { question } = useQuestion();
  return (
    <Layout>
      <Flex
        width="100%"
        height="100%"
        backgroundColor="orange.50"
        alignItems="center"
        justifyContent="center"
      >
        {question === QuestionType.GetStarted && <GetStarted />}
        {question === QuestionType.Spouse && <Spouse />}
        {question === QuestionType.ParentsMedical && <ParentsMedical />}
      </Flex>
    </Layout>
  );
};
