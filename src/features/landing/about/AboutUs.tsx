import React from "react";
import { Footer } from "../../../components/Footer";
import { Layout } from "../../../components/Layout";
import { Description } from "./Description";
import { Hero } from "./Hero";
import { CTO } from "./CTO";

export function AboutUs() {
  return (
    <Layout>
      <Hero />
      <Description />
      <CTO />
      <Footer />
    </Layout>
  );
}
