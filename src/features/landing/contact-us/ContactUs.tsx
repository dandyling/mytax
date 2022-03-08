import React from "react";
import { Footer } from "../../../components/Footer";
import { Layout } from "../../../components/Layout";
import { Hero } from "./Hero";
import { CTO } from "./CTO";

export function ContactUs() {
  return (
    <Layout>
      <Hero />
      <CTO />
      <Footer />
    </Layout>
  );
}
