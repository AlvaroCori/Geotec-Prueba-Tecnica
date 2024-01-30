import React, { useEffect, useState } from 'react'
import Cats from '../CatsSaved';
import CatCard from '../components/CatCard';


const MyCuriosities: React.FC = () => {
  let cats = new Cats();
  let ccs: any[] = [];
  let ccs2: any[] = [];
  let [catCards,setCatCards] = useState(ccs2);
  let isLoaded = false;
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        // Filtrar elementos según el término de búsqueda  
  };
  function loadAllCats(){
    const newCatCards = cats.getCats().map((cat, keyId) => (
      <CatCard key={`cat-${keyId + 1}`} cat={cat} />
    ));
    setCatCards(newCatCards);
    
  }

  function handleClick(input: string){
    let filteredCatCards: React.ReactNode[] = [];
    if (input === '') {
      loadAllCats();
    } else {
      filteredCatCards = cats
        .getCats()
        .filter((cat) => cat.name === input)
        .map((cat, keyId) => <CatCard key={`cat-${keyId + 1}`} cat={cat} />);
      setCatCards(filteredCatCards);
    }
  }
  useEffect(() => {
    if (!isLoaded){
      isLoaded = true;
      loadAllCats();
      console.log(catCards);
    }
  }, []);
  
  
  return (
    
    <div className="flex items-center flex-col text-2xl h-full my-12">

      <div className='flex items-center justify-center'>
            <div className='flex flex-col mb-4'>
                <label htmlFor='name-input' className='text-base'>Search:</label>
                <input className="bg-slate-200" value={searchTerm} onChange={handleSearch} type="text" name='name-input'></input>
            </div>
          
          <input className="py-2 px-4 mx-6 bg-blue-500 hover:bg-blue-400 text-white hover:border-blue-500 rounded"  type="submit" value={"SEARCH"} onClick={()=>handleClick(searchTerm)}/>
      </div>
      <div id="cats-container" className="flex justify-center flex-wrap rounded-lg bg-slate-200 max-w-full">
        {catCards}
      </div>

    </div>
  )
}

export default MyCuriosities;


//<img className="rounded-lg max-w-80 max-h-80 brightness-140 contrast-140" src={PATHS.RANDOM_CAT} alt="random cat"></img>
