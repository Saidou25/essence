import React from "react";
// import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import xLogo from "../assets/images/xLogo.png";

export default function Footer() {
  return (
    <div className="footer-container no-print" role="footer">
      <div className="contact-us">
        <span
          className="contact-text"
          onClick={() => window.open("https://princetongreen.org/contact-us")}
        >
          Contact Us
        </span>
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
          <img
            data-testid="X"
            className="logo2"
            src={xLogo}
            alt="X"
            onClick={() => window.open("https://x.com/Always_Be_BOLD")}
          />
        </div>
      </div>
      <div className="middle-text">
        <span
          className="link-text"
          onClick={() =>
            window.open("https://princetongreen.org/new-earth-books")
          }
        >
          NEW EARTH BOOKS
        </span>
        <span
          className="link-text"
          onClick={() =>
            window.open("https://princetongreen.org/visionary-authors")
          }
        >
          VISIONARY AUTHORS
        </span>
        <span
          className="link-text"
          onClick={() =>
            window.open("https://princetongreen.org/free-resources")
          }
        >
          FREE RESOURCES
        </span>
      </div>

      <div className="terms">
        <span
          className="link-text"
          onClick={() =>
            window.open("https://princetongreen.org/terms-and-conditions")
          }
        >
          Terms & Conditions
        </span>
        <span
          className="link-text"
          onClick={() =>
            window.open("https://princetongreen.org/privacy-policy")
          }
        >
          Privacy Policy
        </span>
      </div>
      <div className="company-container">
        <span className="company">© 2008-2025 Princeton Green LLC</span>
      </div>
    </div>
  );
}
