// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Curiosities from "./pages/Curiosities";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/curiosities" element={<Curiosities />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;