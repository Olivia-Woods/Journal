import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import StartJournaling from "./pages/StartJournaling";
import Entries from "./pages/Entries";
import Journals from "./pages/Journals";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/start-journaling" element={<StartJournaling />} />
        <Route path="/entries" element={<Entries />} />
        <Route path="/journals" element={<Journals />} />
      </Routes>
    </Router>
  );
}

export default App;
