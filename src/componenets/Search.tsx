import React, {useState} from 'react'
import { Link } from 'react-router-dom';

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

interface SearchProps {
  products: ProductData[];
}

const Search = (props: SearchProps) => {

  const [searchArr, setSearchArr] = useState<ProductData[]>([]);
  const [isSearch, setIsSearch] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen); 
  };

  const closeDropDown = () => {
    setIsDropDownOpen(false); 
  };

  const handleSearchChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    
    const value = event.target.value.toLowerCase();
    
    const matchingSearch = (props.products || []).filter(
      (product: ProductData) => product.title.toLowerCase().includes(value)
    );
      setSearchArr( matchingSearch);
      setIsSearch(value.length > 0);
      console.log('matching:',matchingSearch);
      console.log(toggleDropDown);
  }

  return (
    <div>
      <input 
      type={'search'}
      placeholder="검색"
      id="search"
      onChange={handleSearchChange}
      onFocus={toggleDropDown}
      onBlur={closeDropDown}
      className="input absolute w-full h-full rounded-none border border-slate-400 left-0 z-[-10] invisible sm:hidden transition ease-in-out duration-300"
      />
      <input
        type={'search'}
        placeholder="검색"
        id="search"
        onChange={handleSearchChange}
        onFocus={toggleDropDown}
        onBlur={closeDropDown}
        className="hidden sm:block input input-bordered w-full max-w-xs"
      />
    {isSearch && isDropDownOpen && (
     <ul className='menu dropdown-content p-2 shadow bg-base-100 w-52 mt-4 !fixed right-20 sm:!absolute sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600'>
      {searchArr.map((product:ProductData) => (
        <ul key={product.id}>
          <li>
            <Link to={`/products/${product.id}`}>
           <span className='text-left text-gray-600 dark:text-white line-clamp-2'>
            {product.title}
            </span> 
            </Link>
          </li>
        </ul>
      ))}
     </ul> 
    )}
    </div>
  )
}

export default Search