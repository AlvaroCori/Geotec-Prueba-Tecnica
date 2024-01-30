import React, { useState } from 'react'
import PATHS from '../global';
import Cats from '../CatsSaved';
import CatCard from '../components/CatCard';

const MyCuriosities: React.FC = () => {
  let cats = new Cats();
  let catCards = [];
  let keyId = 1;
  for (let cat of cats.getCats()){
    catCards.push(<CatCard key={"cat-"+String(keyId)} cat={cat}/>);
    keyId = keyId + 1;
  }
  return (
    <div className="flex items-center flex-col text-2xl h-full my-12">
      <div className="flex justify-center flex-wrap rounded-lg bg-slate-200 max-w-full">
        {catCards}
      </div>

    </div>
  )
}

export default MyCuriosities;


//<img className="rounded-lg max-w-80 max-h-80 brightness-140 contrast-140" src={PATHS.RANDOM_CAT} alt="random cat"></img>
