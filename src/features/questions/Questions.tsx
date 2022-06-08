import React, { useEffect } from "react";
import { GetTax } from "./GetTax";
import { QuestionType, useQuestion } from "./Question";

export const Questions = () => {
  const { setQuestion } = useQuestion();

  useEffect(() => {
    setQuestion(QuestionType.GetStarted);
  }, [setQuestion]);

  return <GetTax />;
};
