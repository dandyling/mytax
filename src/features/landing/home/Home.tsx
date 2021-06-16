import React from "react";
import { Footer } from "../../../components/Footer";
import { Layout } from "../../../components/Layout";
import { CTO } from "./CTO";
import { Demo } from "./Demo";
import { Generate } from "./Generate";
import { Hero } from "./Hero";
import { Reviews } from "./Reviews";
import { Services } from "./Services";

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Generate />
      <Demo />
      <Services />
      <Reviews />
      <CTO />
      <Footer />
    </Layout>
  );
};
