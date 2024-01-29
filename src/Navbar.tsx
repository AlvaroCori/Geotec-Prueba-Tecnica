import React from 'react';


import Home from "./pages/Home";
import Curiosities from "./pages/NewCuriosity";
const Navbar: React.FC = () => (
  <div className="bg-indigo-600 h-auto"> 
    <div className="flex items-baseline">
      <a href="home" className="text-white hover:bg-indigo-500 hover:bg-opacity-75 text-2xl font-semibold px-6 py-4 rounded-md">Inicio</a>
      <a href="curiosities" className="text-white hover:bg-indigo-500 hover:bg-opacity-75 text-2xl font-semibold px-6 py-4 rounded-md">Mis curiosidades</a>
    </div>
  </div>
)

export default Navbar;

