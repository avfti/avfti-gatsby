import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

function ContactPage() {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <About />
      </div>
    </Layout>
  );
}

export default ContactPage;
