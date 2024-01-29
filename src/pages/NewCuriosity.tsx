import React from 'react'

import { FactsService } from '../services/FactsService';
import { useEffect, useState } from 'react'
import PATHS from '../global';

const saveTxt = async (fact: string) => {
  const blob = new Blob([fact], { type: 'text/plain' });
  const link = document.createElement('a');

  link.href = window.URL.createObjectURL(blob);
  link.download = Date.now().toString() + '-archivo.txt';
  document.body.appendChild(link);

  link.click();
  document.body.removeChild(link);
};

const copyToClipboard = async (texto : string) => {
    try {
      await navigator.clipboard.writeText(texto);
    } catch (error) {
      console.error(error);
    }
};


const NewCuriosity: React.FC = () => {
  let isLoaded = false;
  let [firstWord,setFirstWord] = useState("");
  let [fact,setFact] = useState("");
  let service = new FactsService(PATHS.RANDOM_FACT);
  service.loadNewFact();
  useEffect(() => {
    if (!isLoaded){
      isLoaded = true;
      service.loadNewFact().then(request =>{
        let newFirstWord = request.split(" ", 1)[0];
        setFirstWord(newFirstWord);
        setFact(request.substring(newFirstWord.length +1 , request.length));
        
      });
    }
  }, []);
  return (
    <div className="flex items-center flex-col text-2xl">
      <div className="flex items-center justify-center rounded-lg bg-teal-100 w-96 h-96">
        <img className="rounded-lg max-w-80 max-h-80 brightness-140 contrast-140" src={PATHS.RANDOM_CAT} alt="random cat"></img>
      </div>
      <div className='flex items-center flex-col w-8/12'>
        <h1><span className="text-transparent bg-clip-text bg-gradient-to-r bold to-zinc-700 from-sky-400">{firstWord}</span></h1>
        <p className='text-center h-44'>{fact}</p>
      </div>
      <div>
        <button className="py-2 px-4 mx-6 bg-blue-500 hover:bg-blue-400 text-white border-black-700 hover:border-blue-500 rounded" onClick={()=>saveTxt(fact)}>
          SAVE
        </button>
        <button className="py-2 px-4 mx-6 bg-blue-500 hover:bg-blue-400 text-white border-black-700 hover:border-blue-500 rounded" onClick={()=>copyToClipboard(fact)}>
          COPY
        </button>
      </div>
    </div>
  )
}

export default NewCuriosity;

