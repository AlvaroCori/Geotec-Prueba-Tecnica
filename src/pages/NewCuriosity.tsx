import React from 'react'

import { FactsService } from '../services/FactsService';
import { CatsService } from '../services/Cats.service';
import { useEffect, useState } from 'react'
import PATHS from '../global';
import { CatModel } from '../Models/CatModel';

import Cats from '../CatsSaved';
let cats = new Cats();
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

function saveCat(fact: string, cat: CatModel | null){
  console.log("dddd");
  if (cat){
    cat.fact = fact;
    cats.addCat(cat);
    console.log(cat);
  }
  saveTxt(fact);
}
const NewCuriosity: React.FC = () => {
  let isLoaded = false;
  let [firstWord,setFirstWord] = useState("");
  let [fact,setFact] = useState("");
  let [cat, setCat] = useState<CatModel | null>(new CatModel("", ""));
  let service = new FactsService(PATHS.RANDOM_FACT);
  let catService = new CatsService(PATHS.GET_CAT);
  useEffect(() => {
    
    if (!isLoaded){
      isLoaded = true;
      service.loadNewFact().then(request =>{
        let newFirstWord = request.split(" ", 1)[0];
        setFirstWord(newFirstWord);
        setFact(request.substring(newFirstWord.length +1 , request.length));
        catService.getNewCat().then(catUrl =>{
          setCat(new CatModel(catUrl+"/says/"+newFirstWord, newFirstWord));
          console.log(cat?.url);
        });
      });
      
    }
  }, []);
  return (
    <div className="flex items-center flex-col text-2xl">
      <div className="flex items-center justify-center rounded-lg bg-teal-100 w-96 h-96">
        <img className="rounded-lg max-w-80 max-h-80 brightness-140 contrast-140" src={cat?.url} alt={cat?.name}></img>
      </div>
      <div className='flex items-center flex-col w-8/12'>
        <p className='text-center h-44'><span className="text-transparent bg-clip-text bg-gradient-to-r bold to-zinc-700 from-sky-400">{firstWord}</span>{" "+fact}</p>
      </div>
      <div>
      <button className="py-2 px-4 bg-blue-500 hover:bg-blue-400 text-white hover:border-blue-500 rounded">
            <a href="newcuriosity">NEW CURIOSITY</a>
          </button>
        <button className="py-2 px-4 mx-6 bg-blue-500 hover:bg-blue-400 text-white hover:border-blue-500 rounded" onClick={()=>saveCat(firstWord+" "+fact, cat)}>
          SAVE
        </button>
        <button className="py-2 px-4 mx-6 bg-blue-500 hover:bg-blue-400 text-white hover:border-blue-500 rounded" onClick={()=>copyToClipboard(fact)}>
          COPY
        </button>
      </div>
    </div>
  )
}

export default NewCuriosity;

