import React from "react";
import { Footer } from "../../../components/Footer";
import { Layout } from "../../../components/Layout";
import { Description } from "./Description";
import { Hero } from "./Hero";
import { CTO } from "./CTO";

export function CreateAccount() {
  return (
    <Layout>
      <Hero />
      <Description />
      <CTO />
      <Footer />
    </Layout>
  );
}
