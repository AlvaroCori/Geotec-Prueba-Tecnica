import React from 'react';
import { CatModel } from '../Models/CatModel';


const CatCard = (elements:any ) => {
  let cat:CatModel = elements.cat;
  return (
    <div className='flex items-center flex-col text-2xl max-w-sm rounded bg-slate-100 overflow-hidden shadow-lg min-h-96 min-w-96 m-6'>
      <img className="w-full w-52 h-52" src={cat.url} alt={cat.name}></img>
      <h3 className="font-bold mx-2 text-center">{cat.name}</h3>
      <p className='text-gray-700 text-base mx-2 text-justify'>{cat.fact}</p>
    </div>
  );
};

export default CatCard;