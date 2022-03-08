import { atom, useRecoilState } from "recoil";

const exemptionAmountState = atom({
  key: "exemptionAmountState",
  default: 0,
});

export const useExemptionAmount = () => {
  const [amount, setAmount] = useRecoilState(exemptionAmountState);

  const addAmount = (add: number) => {
    setAmount((value) => value + add);
  };

  const reset = () => {
    setAmount(0);
  };

  return { amount, addAmount, reset };
};
