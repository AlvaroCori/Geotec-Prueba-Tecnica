import React from 'react'
import PATHS from '../global';



const MyCuriosities: React.FC = () => {

  return (
    <div className="flex items-center flex-col text-2xl">
      <div className="flex items-center justify-center rounded-lg bg-teal-100 w-96 h-96">
        <img className="rounded-lg max-w-80 max-h-80 brightness-140 contrast-140" src={PATHS.RANDOM_CAT} alt="random cat"></img>
      </div>
      <div className='flex items-center flex-col w-8/12'>
      </div>
      <div>
      </div>
    </div>
  )
}

export default MyCuriosities;

