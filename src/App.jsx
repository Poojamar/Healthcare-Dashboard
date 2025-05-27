import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./components/Pages/AuthPage";
import DashboardPage from "./components/Pages/DashboardPage";

function App(){ 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/Login" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default App;
