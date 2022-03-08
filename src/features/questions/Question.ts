import { atom, useRecoilState } from "recoil";
import { getEnumLength } from "../../utils/utils";

export enum QuestionType {
  GetStarted,
  Spouse,
  ParentsMedical,
  ParentsMedicalAmount,
  Done,
}

const questionState = atom({
  key: "questionState",
  default: QuestionType.GetStarted,
});

export const useQuestion = () => {
  const [question, setQuestion] = useRecoilState(questionState);

  const hasNext = question < getEnumLength(QuestionType) - 1;

  const goNext = () => {
    if (hasNext) {
      setQuestion((value) => value + 1);
    }
  };

  return { question, setQuestion, goNext };
};
