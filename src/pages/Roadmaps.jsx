import React from "react";
import "../styles/Roadmaps.css";

const roadmaps = [
  {
    title: "Mechanical Core",
    link: "https://spo.iitk.ac.in/assets/Roadmap_ME.pdf",
  },
  {
    title: "Electrical Core",
    link: "https://spo.iitk.ac.in/assets/Roadmap_EE.pdf",
  },
  {
    title: "Analyst",
    link: "https://spo.iitk.ac.in/assets/Roadmap_Analytics.pdf",
  },
  {
    title: "Product Management",
    link: "https://spo.iitk.ac.in/assets/Roadmap_PM.pdf",
  },
  { title: "SDE", link: "https://spo.iitk.ac.in/assets/Roadmap_SDE.pdf" },
  {
    title: "Consulting",
    link: "https://spo.iitk.ac.in/assets/Roadmap_Consulting.pdf",
  },
  { title: "MSE Core", link: "https://spo.iitk.ac.in/assets/Roadmap_MSE.pdf" },
  { title: "CHE Core", link: "https://spo.iitk.ac.in/assets/Roadmap_CHE.pdf" },
  { title: "AE Core", link: "https://spo.iitk.ac.in/assets/Roadmap_AE.pdf" },
];

const Roadmaps = () => {
  return (
    <div className="roadmap-container">
      <h1 className="roadmap-title">Preparation Roadmaps</h1>
      <div className="roadmap-grid">
        {roadmaps.map((roadmap, index) => (
          <a key={index} href={roadmap.link} className="roadmap-card">
            <div className="roadmap-content">
              <h2 className="roadmap-heading">{roadmap.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Roadmaps;
