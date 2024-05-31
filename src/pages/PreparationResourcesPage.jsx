// components/PreparationResourcesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/PreparationResources.css";

const resources = [
  {
    title: "Deffered Placement Policy",
    link: "https://spo.iitk.ac.in/docs/2021-22/deferred_placement_policy.pdf",
  },
  {
    title: "Placement Policy",
    link: "https://spo.iitk.ac.in/assets/2023-24/Placement_Policy_2023-24.pdf",
  },
  {
    title: "Internship Policy",
    link: "https://spo.iitk.ac.in/assets/2023-24/Internship-Policy-2023-24.pdf",
  },
  {
    title: "Leave Application",
    link: "docs/2021-22/LAF.doc",
  },
  {
    title: "Project Verification Form",
    link: "docs/2021-22/PVF.doc",
  },
  {
    title: "PPT Absence Form",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdV3sWKB-GSbFNkHdGSSP7N4ydybbFYumTjBSIAaZw04Na-xQ/viewform",
  },
  {
    title: "Corporate Internship Waiver Form",
    link: "https://docs.google.com/document/d/1zQg3xr6Ca0jHFWPn6o2ZCyi7ypxtjdFoYdIT4pZwncc/edit",
  },
  {
    title: "List of Companies",
    link: "https://spo.iitk.ac.in/docs/2021-22/List-of-companies.pdf",
  },
  {
    title: "Previous Year Internship Proforma",
    link: "https://drive.google.com/file/d/1Td9Z5gMgMO6U9mn8tXTS86IZ2Rs0LpWB/view",
  },
  {
    title: "Previous Year Placement Proforma",
    link: "https://drive.google.com/file/d/1VSVDkvSQO0Gi270WlxXeFr_ctxqtUERF/view",
  },
];

const PreparationResourcesPage = () => {
  return (
    <div className="resources-container">
      <h1>Preparation Resources</h1>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <Link to={resource.link} key={index} className="resource-card">
            <h2>{resource.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PreparationResourcesPage;
