import React, {useState} from 'react'

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity:number;
}



const Search = (props:any & ProductData) => {

  const [search, setSearch] = useState('');

  const handleSearch = (e:any) => {
    setSearch(e.target.value);
  }


  return (
    <div>
      <input 
      onChange={handleSearch}
      type={'search'}
      value={search}
      placeholder="검색"
      id="search"
      className="input absolute w-full h-full rounded-none border border-slate-400 left-0 z-[-10] invisible sm:hidden transition ease-in-out duration-300"
      />
      <input
        onChange={handleSearch}
        type={'search'}
        value={search}
        placeholder="검색"
        className="hidden sm:block input input-bordered w-full max-w-xs"
        id="search"
      />
    </div>
  )
}

export default Search