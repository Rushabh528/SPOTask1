// PlacementInsightsPage.jsx

import "../styles/Placementinsight.css";
import React, { useState } from "react";

const placementData = [
  { date: "2023-09-14", name: "Abhinav Agarwal", company: "Piramal" },
  {
    date: "2023-09-14",
    name: "Abhinav D Singh",
    company: "McKinsey & Company",
  },
  { date: "2023-09-14", name: "Abhishek Gurjar", company: "SAP Labs" },
  { date: "2023-09-14", name: "Aditi", company: "Rakuten Mobile" },
  { date: "2023-09-14", name: "Aditya Gupta", company: "Square Point Capital" },
  { date: "2023-09-14", name: "Akarsh Mittal", company: "Bain and Co." },
  { date: "2023-09-14", name: "Akash Chavan", company: "Rakuten Mobile" },
  { date: "2023-09-14", name: "Akhila Mudupu", company: "Tata Steel" },
  { date: "2023-09-14", name: "Akshat Goyal", company: "McKinsey & Company" },
  {
    date: "2023-09-14",
    name: "Akshay kumar Prasad",
    company: "Reliance Industries Limited",
  },
  { date: "2023-09-14", name: "Ananya Singh", company: "Groww" },
  { date: "2023-09-14", name: "Anirudh Meena", company: "Samsung R&D Delhi" },
  { date: "2023-09-14", name: "Anubhav Kalyani", company: "Sprinklr" },
  { date: "2023-09-14", name: "Anuj Gupta", company: "Texas Instruments" },
  { date: "2023-09-14", name: "Anurag Tyagi", company: "Walmart Global Tech" },
  {
    date: "2023-09-14",
    name: "Anushka Sreshth",
    company: "Infosys (Wongdoody – their design vertical)",
  },
  { date: "2023-09-14", name: "Arpit Kumar", company: "Make My Trip" },
  { date: "2023-09-14", name: "Arpit Singh", company: "Cohesity" },
  { date: "2023-09-14", name: "Ayush Barnwal", company: "Jaguar Land Rover" },
  { date: "2023-09-14", name: "Ayush Sakya", company: "Glean" },
  {
    date: "2023-09-14",
    name: "BHAVIKA RANGWANI",
    company: "J P Morgan and Chase",
  },
  { date: "2023-09-14", name: "Chinmayee Phalak", company: "Oracle" },
  { date: "2023-09-14", name: "Deepak Kumar", company: "Samsung Noida" },
  { date: "2023-09-14", name: "Deepanshu Bisht", company: "Bajaj Auto Ltd." },
  { date: "2023-09-14", name: "Deshanki Singhal", company: "Groww" },
  { date: "2023-09-14", name: "Divyansh Garg", company: "SquarePoint Capital" },
  { date: "2023-09-14", name: "Faizan Ahmad Shah", company: "JLR" },
  { date: "2023-09-14", name: "Gaurav Chauhan", company: "Hilabs" },
  { date: "2023-09-14", name: "Gedala Sai Praveen", company: "Signal Chip" },
  {
    date: "2023-09-14",
    name: "Ghanshyam Prashant Waindeshkar",
    company: "Navi",
  },
  { date: "2023-09-14", name: "Harsh Mishra", company: "JP Morgan Chase" },
  { date: "2023-09-14", name: "Hem Shah", company: "Nomura" },
  { date: "2023-09-14", name: "Jahnvi Tripathi", company: "Barclays" },
  { date: "2023-09-14", name: "Jai Wason", company: "Barclays Bank" },
  { date: "2023-09-14", name: "Jatin Garg", company: "Capital One" },
  { date: "2023-09-14", name: "Jeet Sarangi", company: "Juniper Networks" },
  { date: "2023-09-14", name: "Khushboo Sachdeva", company: "Finmechanics" },
];

const PlacementInsightsPage = () => {
  console.log("ji");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = placementData.filter((item) =>
    item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Placement Insights</h1>
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

export default PlacementInsightsPage;
