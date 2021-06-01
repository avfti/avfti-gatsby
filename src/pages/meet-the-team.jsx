import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

function MeetTheTeamPage() {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Meet the Team | ${config.siteTitle}`} />
        <h1>Meet the team</h1>
      </div>
    </Layout>
  );
}

export default MeetTheTeamPage;
