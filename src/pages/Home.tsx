import React from 'react'
//import { useEffect, useState } from 'react'
import PATHS from '../global';
import paw from '../images/paw.png';

const Home: React.FC = () => {

  return (
    <div className="flex items-center flex-col">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">CATS</span> CURIOSITIES</h1>
      <img className='h-8 w-8' src={paw} alt="claw"></img>
      <div className="flex items-center py-11">
        <div className="flex items-center flex-col h-96 w-96 px-11">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="py-2 px-4 bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <a href="curiosities">LAUNCH CURIOSITIES</a>
          </button>
        </div>
        <div className="rounded-md flex justify-center items-center h-96 w-96 px-11 bg-gradient-to-r from-cyan-500 to-blue-500">
          <img className="object-contain h-80 w-80" src={PATHS.RANDOM_CAT_SQUARE} alt="main cat 1"></img>
        </div>
      </div>
        
    </div>
  )
}

export default Home;