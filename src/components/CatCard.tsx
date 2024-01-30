import React, { useState } from 'react';
import { CatModel } from '../Models/CatModel';
import CatDialog from './CatDialog';
const CatCard = (elements:any ) => {
  let cat:CatModel = elements.cat;
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <div className='flex items-center flex-col text-2xl max-w-sm rounded bg-slate-100 overflow-hidden shadow-lg min-h-96 min-w-96 m-6 hover:brightness-125' onClick={handleOpenDialog}>
      <img className="w-full w-52 h-72" src={cat.url} alt={cat.name}></img>
      <h3 className="font-bold mx-2 text-center">{cat.name}</h3>
      <p className='text-gray-700 text-base mx-2 text-justify'>{cat.fact}</p>
      <CatDialog open={openDialog} onClose={handleCloseDialog} cat={cat}></CatDialog>
    </div>
  );
};

export default CatCard;