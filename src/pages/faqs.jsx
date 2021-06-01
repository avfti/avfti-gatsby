import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

function FaqsPage() {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`FAQs | ${config.siteTitle}`} />
        <About />
      </div>
    </Layout>
  );
}

export default FaqsPage;
