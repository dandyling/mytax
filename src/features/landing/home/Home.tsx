import React, { useEffect } from "react";
import { Footer } from "../../../components/Footer";
import { Layout } from "../../../components/Layout";
import { QuestionType, useQuestion } from "../../questions/Question";
import { CTO } from "./CTO";
import { Demo } from "./Demo";
import { Hero } from "./Hero";
import { Product } from "./Product";
import { Reviews } from "./Reviews";
import { Services } from "./Services";

export function Home() {
  const { setQuestion } = useQuestion();

  useEffect(() => {
    setQuestion(QuestionType.GetStarted);
  }, [setQuestion]);

  return (
    <Layout>
      <Product />
      <Hero />
      <Demo />
      <Services />
      <Reviews />
      <CTO />
      <Footer />
    </Layout>
  );
}
