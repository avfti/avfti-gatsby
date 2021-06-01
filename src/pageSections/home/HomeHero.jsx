import React from "react";

function HomeHero() {
  return (
    <div className="hero-mission">
      <div className="hero-container">
        <p className="hero-description">A Voice for the Innocent is a non-profit community dedicated to the support of those affected by rape and sexual abuse by offering a safe and compassionate space to share stories and seek help.</p>
        <a href="/tell-story/" className="btn-primary mb-4 mr-2">Tell Your Story</a>
        <a href="/about/" className="btn-ghost">Learn About AVFTI</a>
      </div>
    </div>
  );
}

export default HomeHero;
