import React from 'react';

const Navbar: React.FC = () => (
  <div className="bg-indigo-600 h-auto"> 
    <div className="flex items-baseline justify-around ">
      <a href="home" className="text-white hover:bg-indigo-500 hover:bg-opacity-75 text-2xl font-semibold px-28 py-4 rounded-md">Inicio</a>
      <a href="curiosities" className="text-white hover:bg-indigo-500 hover:bg-opacity-75 text-2xl font-semibold px-28 py-4 rounded-md">Mis curiosidades</a>
    </div>
  </div>
)

export default Navbar;

