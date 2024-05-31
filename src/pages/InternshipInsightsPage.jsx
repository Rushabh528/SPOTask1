// PlacementInsightsPage.jsx

import "../styles/Placementinsight.css";
import React, { useState } from "react";

const internshipData = [
  {
    date: "2023-06-21",
    name: "Abhishek Pardhi",
    company: "Summer Intern at Sprinklr",
  },
  {
    date: "2023-06-21",
    name: "Adarsh kumar",
    company: "Summer Intern at Jaguar Land rover India Limited",
  },
  {
    date: "2023-06-21",
    name: "Aditya Anand",
    company: "Summer Intern at Edelweiss",
  },
  {
    date: "2023-06-21",
    name: "Aditya Tanwar",
    company: "Summer Intern at Tower Research Capital",
  },
  {
    date: "2023-06-21",
    name: "Akanksha Singh",
    company: "Summer Intern at Bain & Company",
  },
  {
    date: "2023-06-21",
    name: "Akhil Jain",
    company: "Summer Intern at DE Shaw India",
  },
  {
    date: "2023-06-21",
    name: "Akshay K Muraleedharan",
    company: "Summer Intern at NVIDIA",
  },
  {
    date: "2023-06-21",
    name: "Alok Kumar Thakur",
    company: "Summer Intern at Amazon",
  },
  { date: "2023-06-21", name: "Amit Jain", company: "Summer Intern at Amazon" },
  {
    date: "2023-06-21",
    name: "Anmol Pabla",
    company: "Summer Intern at Morgan Stanley",
  },
  {
    date: "2023-06-21",
    name: "Ansh Saxena",
    company: "Summer Intern at Alphagrep Securities",
  },
  {
    date: "2023-06-21",
    name: "Anshul Jain",
    company: "Summer Intern at Accenture",
  },
  { date: "2023-06-21", name: "Anshuman", company: "Summer Intern at Walmart" },
  {
    date: "2023-06-21",
    name: "Anushka Panda",
    company: "Summer Intern at Microsoft India",
  },
  {
    date: "2023-06-21",
    name: "Armeet Singh Luthra",
    company: "Summer Intern at Piramal Pharma Solutions",
  },
  {
    date: "2023-06-21",
    name: "Arnav Gupta",
    company: "Summer Intern at Tower Research",
  },
  {
    date: "2023-06-21",
    name: "Arpit Kumar Rai",
    company: "Summer Intern at Glean",
  },
  {
    date: "2023-06-21",
    name: "Aryaman Singhal",
    company: "Summer Intern at Morgan Stanley",
  },
  {
    date: "2023-06-21",
    name: "Aryan Sharma",
    company: "Summer Intern at Quantbox",
  },
  {
    date: "2023-06-21",
    name: "Aryan Vora",
    company: "Summer Intern at Bain & Company",
  },
  {
    date: "2023-06-21",
    name: "Aryash Pateriya",
    company: "Summer Intern at Boston Consulting Group",
  },
  {
    date: "2023-06-21",
    name: "Avi Kumar",
    company: "Summer Intern at QUADEYE",
  },
  {
    date: "2023-06-21",
    name: "Avinash Prasad",
    company: "Summer Intern at Goldman Sachs",
  },
  {
    date: "2023-06-21",
    name: "Ayush Gupta",
    company: "Summer Intern at Amazon",
  },
  {
    date: "2023-06-21",
    name: "Ayush Kumar",
    company: "Summer Intern at Texas Instruments",
  },
];

const InternshipInsightsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = internshipData.filter((item) =>
    item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Internship Insights</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            <strong>{item.date}</strong>: {item.name} - {item.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternshipInsightsPage;
