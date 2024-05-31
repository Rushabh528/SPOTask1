// components/FaqPage.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/FAQs.css";

const faqs = [
  {
    question: "What are the restrictions on resume format?",
    answer: `There are no restrictions on the resume format barring a few mentioned below. The top heading of your resume should be your Name, Department, year of study, and contact information. A table of educational qualifications should follow it including 10th, 12th marks, and CPI(UG and PG both if applicable) in reverse chronological order.`,
  },
  {
    question: "What should be the name of the resume file (one page)?",
    answer: `The resume file should be named as RollNumber_Name__Program_Department_ResumeNumber. For example, a student with the following details: Roll number: 190351, Name: Gyanendra Kumar, Program - BTech(BT), Department : Mechanical(ME) should name the resume files as 190351_Gyanendra_BT_ME_1, 190351_Gyanendra_BT_ME_2, 190351_Gyanendra_BT_ME_3.`,
  },
  {
    question:
      "How to mention JEE Mains/JEE Adv/any other examination ranks or other scholastic achievements in my resume?",
    answer: `JEE Mains/JEE Adv. ranks have to be mentioned in the numbers, not percentile. For eg, AIR 1234 in JEE Mains 2019. If someone wants to mention their rank in their department, a mail from the HoD of the department is required. Definitely mention the year of Activity or Achievement.`,
  },
  {
    question:
      "I don't have any proof for some points on my resume, but I can provide them after campus reopens. What should I do?",
    answer: `[Please note that the below exceptions are only allowed for Scholastic and Extracurricular Achievements.] For verification of 10th marks, 12th marks, and JEE ranks, a google form will be circulated through mail.All the students will need to fill out that for For the verification of any other scholastic achievements(if you do not have a scanned copy of the documents with you), you need to fill the following undertaking and include it in the zip file of proofs, to be sent to spoproofs2022@gmail.com. Undertaking Form[bit.ly/spoundertaking] These details will be cross- verified in the future and any discrepancy will be dealt with according to SPO policy.The points on your resume for which you will provide the undertaking should be # marked with a footnote 'not verified by SPO'. Such points should be given a # mark and a footnote only on the Master Resume, which is not visible to the company officials, and not on the one - page resumes, to be uploaded on the portal.`,
  },
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Resume FAQs</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(index)}>
            <h3>{faq.question}</h3>
            <FontAwesomeIcon
              icon={activeIndex === index ? faChevronUp : faChevronDown}
            />
          </div>
          <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqPage;
