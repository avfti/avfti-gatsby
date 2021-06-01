import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Navigation from "../components/Global/Navigation"
import Footer from "../components/Global/Footer"

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
