import React from "react";
// import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container no-print" role="footer">
      <div className="row top-row-footer g-0">
        <span
          className="col-sm-12 col-md-2 col-xl-2 link-text-top"
          onClick={() =>
            window.open("https://princetongreen.org/")
          }
        >
          Welcome Home
        </span>
        <span
          className="col-sm-12 col-md-3 col-xl-2 link-text-top"
          onClick={() =>
            window.open("https://newearthcivilization.com/new-earth-community")
          }
        >
          New Earth Community
        </span>
        <span
          className="col-sm-12 col-md-2 col-xl-2 link-text-top"
          onClick={() =>
            window.open("https://newearthcivilization.com/our-cosmic-cluster")
          }
        >
          Cosmic Cluster
        </span>
        <span
          className="col-sm-12 col-md-2 col-xl-2 link-text-top"
          onClick={() =>
            window.open("https://newearthcivilization.com/free-resources")
          }
        >
          Free Resources
        </span>
        <span
          className="col-sm-12 col-md-2 col-xl-2 link-text-top"
          onClick={() =>
            window.open("https://princetongreen.org/terms-and-conditions")
          }
        >
          New Earth Store
        </span>
      </div>
      <div className="contact-us">
        <span
          className="contact-text"
          onClick={() => window.open("https://princetongreen.org")}
        >
          Proudly powered by princetongreen.org
        </span>
        {/* <span
          className="contact-text"
          onClick={() => window.open("https://princetongreen.org/contact-us")}
        >
          Contact Us
        </span> */}

        <div className="logos-container">
          <FaLinkedinIn
            data-testid="linkedIn-logo"
            className="logo1"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/princetongreen-org/"
              )
            }
          />
          {/* <FaTwitter
            className="logo1"
            onClick={() => window.open("https://x.com/Always_Be_BOLD")}
          /> */}
          {/* <img
            data-testid="X"
            className="logo2"
            src={xLogo}
            alt="X"
            onClick={() => window.open("https://x.com/Always_Be_BOLD")}
          /> */}
        </div>
      </div>
      <div className="middle-text">
        <span
          className="link-text"
          onClick={() =>
            window.open("https://newearthcivilization.com/about-us")
          }
        >
          About Us
        </span>
        <span
          className="link-text"
          onClick={() =>
            window.open("https://newearthcivilization.com/contact-us")
          }
        >
          Contact Us
        </span>
        {/* <span
          className="link-text"
          onClick={() =>
            window.open("https://princetongreen.org/free-resources")
          }
        >
          FREE RESOURCES
        </span> */}
      </div>

      <div className="terms">
        <span
          className="link-text"
          onClick={() =>
            window.open("https://princetongreen.org/privacy-policy")
          }
        >
          Privacy Policy
        </span>
        <span
          className="link-text"
          onClick={() =>
            window.open("https://princetongreen.org/terms-and-conditions")
          }
        >
          Terms & Conditions
        </span>
      </div>
      <div className="company-container">
        <span className="company-logo">©</span>
        <span
          className="company"
          onClick={() => window.open("https://princetongreen.org")}
        >
          2025 Princeton Green LLC
        </span>
      </div>
    </div>
  );
}
