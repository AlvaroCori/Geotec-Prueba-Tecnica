// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import NewCuriosity from "./pages/NewCuriosity";
import MyCuriosities from "./pages/MyCuriosities";
const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/newcuriosity" element={<NewCuriosity />} />
        <Route path="/curiosities" element={<MyCuriosities />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;