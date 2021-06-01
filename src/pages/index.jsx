import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import HomeHero from "../pageSections/home/HomeHero"

function HomePage() {
  return (
    <Layout>
      <Helmet title={`About | ${config.siteTitle}`} />
      <HomeHero />
    </Layout>
  );
}

export default HomePage;
