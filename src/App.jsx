// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/Footer";
import HomePage1 from "./pages/HomePage";
import "./styles/App.css";
import PlacementInsightsPage from "./pages/PlacementInsightsPage";
import InternshipInsightsPage from "./pages/InternshipInsightsPage";
import Roadmaps from "./pages/Roadmaps";
import FaqPage from "./pages/FaqPage";
import PreparationResourcesPage from "./pages/PreparationResourcesPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          <Route
            path="/placement-insights"
            element={<PlacementInsightsPage />}
          />
          <Route
            path="/internship-insights"
            element={<InternshipInsightsPage />}
          />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route
            path="/preparation-resources"
            element={<PreparationResourcesPage />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
