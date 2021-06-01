import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

function ContactPage() {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <h1>Contact</h1>
      </div>
    </Layout>
  );
}

export default ContactPage;
