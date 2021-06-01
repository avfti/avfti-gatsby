import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

function FaqsPage() {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`FAQs | ${config.siteTitle}`} />
        <h1>FAQs</h1>
      </div>
    </Layout>
  );
}

export default FaqsPage;
