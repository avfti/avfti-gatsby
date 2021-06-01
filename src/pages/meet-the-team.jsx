import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

function MeetTheTeamPage() {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Meet the Team | ${config.siteTitle}`} />
        <About />
      </div>
    </Layout>
  );
}

export default MeetTheTeamPage;
