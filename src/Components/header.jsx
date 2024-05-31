import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css"; // Import header styles

function Header() {
  return (
    <header className="App">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/placement-insights" activeClassName="active">
              Placement Insights
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/internship-insights" activeClassName="active">
              Internship Insights
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/roadmaps" activeClassName="active">
              Preparation Roadmaps
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/preparation-resources" activeClassName="active">
              Preparation Resources
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/faqs" activeClassName="active">
              Resume FAQs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
