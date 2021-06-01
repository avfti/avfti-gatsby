import React from "react";

function HomeHero() {
  return (
    <div className="homepage-mission">
      <p className="heading">Our Mission</p>
      <p className="mission-message">A Voice for the Innocent is a non-profit community dedicated to the support of those affected by rape and sexual abuse by offering a safe and compassionate space to share stories and seek help.</p>
      <a href="/tell-story/" className="btn-primary">Tell Your Story</a> <a href="/about/" className="about-us btn">Learn About AVFTI</a>
    </div>
  );
}

export default HomeHero;
