import React from 'react'
import PATHS from '../global';
import paw from '../images/paw.png';
import Cats from '../CatsSaved';
const Home: React.FC = () => {
  let cats = new Cats();
  return (
    <div className="flex items-center flex-col">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">CATS</span> CURIOSITIES</h1>
      <img className='h-8 w-8' src={paw} alt="claw"></img>
      <div className="flex items-center flex-col py-11 md:flex-row">
        <div className="flex items-center flex-col h-96 w-96 px-11 text-justify">
          <p>
          Welcome to our website! We are delighted to have you here. 
          Explore our site with kitten curiosities and kitten pictures. 
          We invite you to dive into a world of knowledge and entertainment! 
          Don't forget that you can see in My Curiosities the same ones you chose to save with kitten pictures. 
          Welcome to our exciting and enriching digital space!
          </p>
          <button className="py-2 px-4 bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded my-8">
            <a href="newcuriosity">LAUNCH CURIOSITIES</a>
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