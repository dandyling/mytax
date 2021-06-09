import React from "react";
import { Layout } from "./components/Layout";
import { GetStarted } from "./features/questions/GetStarted";
import { ParentsMedical } from "./features/questions/ParentsMedical";
import { QuestionType, useQuestion } from "./features/questions/Question";
import { Spouse } from "./features/questions/Spouse";

export const Home = () => {
  const { question } = useQuestion();
  return (
    <Layout>
      {question === QuestionType.GetStarted && <GetStarted />}
      {question === QuestionType.Spouse && <Spouse />}
      {question === QuestionType.ParentsMedical && <ParentsMedical />}
    </Layout>
  );
};
