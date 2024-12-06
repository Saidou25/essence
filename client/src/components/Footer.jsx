import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-container no-print">
      <div className="footer-top">
        {/* <div className="footer-text-div">
          <span
            className="link-text"
            onClick={() => window.open("https://princetongreen.org")}
            
          >
            www.princetongreen.org
          </span>
          <span>www.21stcenturyparadigm.org</span>
        </div> */}

        <div className="middle-text">
          <span
            className="link-text"
            onClick={() => window.open("https://princetongreen.org/insightful-books")}
          >
            Our Insightful Books
          </span>
          <span className="link-text" onClick={() => window.open("https://princetongreen.org/our-visionary-authors")}>Our Visionary Authors</span>
          <span className="link-text" onClick={() => window.open("https://princetongreen.org/free-resources")}>Our Free Resources</span>
          <span className="link-text" onClick={() => window.open("https://builder.hostinger.com/mP47Mwo0WQhVBkl5/preview")}>Our Store</span>
        </div>

        <div className="contact-us">
          <span className="contact-text" onClick={() => window.open("https://princetongreen.org/contact-us")}>Contact Us</span>
          <div className="logos-container">
            <FaLinkedinIn className="logo1" onClick={() => window.open("https://princetongreen.org")} />
            <FaTwitter className="logo1" onClick={() => window.open("https://princetongreen.org")} />
          </div>
        </div>
      </div>
      <div className="company">
        <span className="link-text" onClick={() => window.open("https://princetongreen.org/terms-and-conditions")}>Terms & Conditions</span>
        <span className="link-text" onClick={() => window.open("https://princetongreen.org/privacy-policy")}>Privacy Policy</span>
      </div>
      <span className="company">© 2008-2025 Princeton Green LLC</span>
    </div>
  );
}
