import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

function FinancesPage() {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Finances | ${config.siteTitle}`} />
        <h1>Finances</h1>
      </div>
    </Layout>
  );
}

export default FinancesPage;
