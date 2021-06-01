import React from "react";

function Navigation() {
  return (
    <header>
      <section className="container">
        <div className="nav-wrapper">
          <a href="/" className="logo">
            <img src="/logos/avfti-logo-icon.png" alt="A Voice for the Innocent Logo" />
          </a>
          <nav role="navigation">
            <a href="/stories">Stories</a>
            <a href="https://www.avoicefortheinnocent.org/help/">Find Help</a>
            <a href="https://www.avoicefortheinnocent.org/about/">About</a>
            <a href="https://www.avoicefortheinnocent.org/get-involved/">Get Involved</a>
            <a href="https://www.avoicefortheinnocent.org/blog/">Articles</a>
          </nav>
          <nav className="action-menu">
            <a href="">Store</a>
            <a href="">Donate</a>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Navigation;
