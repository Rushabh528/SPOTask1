// components/Footer.js
import "../styles/Footer.css";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>IITK Links</h3>
          <ul>
            <li>
              <a href="https://iitk.ac.in/">IITK Homepage</a>
            </li>
            <li>
              <a href="https://iitk.ac.in/doaa/">DoAA</a>
            </li>
            <li>
              <a href="https://iitk.ac.in/dosa">DoSA</a>
            </li>
            <li>
              <a href="https://students.iitk.ac.in/">Students' Gymkhana</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>For Companies</h3>
          <ul>
            <li>
              <a href="https://spo.iitk.ac.in/companies#steps">
                Steps - Company registration
              </a>
            </li>
            <li>
              <a href="https://spo.iitk.ac.in/companies#policy">
                Recruitment Procedure and Policy
              </a>
            </li>
            <li>
              <a href="https://spo.iitk.ac.in/assets/2023-24/IITK_Recruitment_Brochure_2023-24.pdf">
                Brochures
              </a>
            </li>
            <li>
              <a href="https://spo.iitk.ac.in/departmental-brochure">
                Departmental Brochures
              </a>
            </li>
            <li>
              <a href="https://spo.iitk.ac.in/companies#faqs">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>For Students</h3>
          <ul>
            <li>
              <a href="https://spo.iitk.ac.in/students#steps">
                Steps - Students Registration
              </a>
            </li>
            <li>
              <a href="https://spo.iitk.ac.in/students#resources">Policy</a>
            </li>
            <li>
              <a href="https://spo.iitk.ac.in/preparation/">
                Preparation Portal
              </a>
            </li>
            <li>
              <a href="https://spo.iitk.ac.in/insights">Insights</a>
            </li>
            <li>
              <a href="https://spo.iitk.ac.in/students#faqs">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>
            Students' Placement office
            <br />
            109, outreach building
            <br />
            IIT Kanpur, Kanpur-208016
            <br />
            Phone no.: +91 512 259 44 33/34
            <br />
            Email: spo@iitk.ac.in
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2023 SPO, IIT Kanpur</p>
      </div>
    </footer>
  );
}

export default Footer;
