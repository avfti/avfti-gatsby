import React from "react";

function Footer() {
  return (
    <footer>
      <section className="container flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3">
          <img src="/logos/avfti-wide.png" width="150" alt="A Voice for the Innocent logo" />
          <p className="text-white py-5 text-lg">
            We are a 501c3 non profit community of support for victims of rape and sex abuse.
          </p>
          <hr />
          <div className="social-networks">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/avoicefortheinnocent/">
              F
            </a>
            <a target="_blank" rel="noreferrer" href="http://www.twitter.com/avfti">
              T
            </a>
            <a target="_blank" rel="noreferrer" href="https://instagram.com/avfti/">
              I
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/user/avoicefortheinnocent">
              Y
            </a>
          </div>
        </div>

        <div className="additional-links">
          <h3>About</h3>
          <a href="/meet-the-team">Meet the Team</a>
          <a href="/finances">Finances</a>
          <a href="/faqs">FAQs</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="additional-links">
          <h3>Support</h3>
          <a href="http://avftistore.com/">Shop</a>
          <a href="https://www.classy.org/give/258514/#!/donation/checkout">Store</a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
