import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getData } from '../store/ProductsAtoms';

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
  products?: ProductData[];
}

const Search = (props: SearchProps) => {
  const navigate = useNavigate();
  const [searchArr, setSearchArr] = useState<ProductData[]>([]);
  const [isSearch, setIsSearch] = useState(false);
  const fetchProductData = useRecoilValue(getData);
  const [fetchedProductData, setFetchedProductData] = useState<ProductData[]>([]);

  const handleSearchChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    
    const value = event.target.value.toLowerCase();
    
    const matchingSearch = (props.products || []).filter(
      (product: ProductData) => product.title.toLowerCase().includes(value)
    );
      setSearchArr(matchingSearch);
      setIsSearch(value.length > 0);
      console.log('matching:',matchingSearch);
  }

  const handleProductClick = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductData;
        setFetchedProductData(data);
        console.log('Fetched Product Data:', data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchData();
  }, [fetchProductData]);


  return (
    <div>
      <input 
      type={'search'}
      placeholder="검색"
      id="search"
      onChange={handleSearchChange}
      className="input absolute w-full h-full rounded-none border border-slate-400 left-0 z-[-10] invisible sm:hidden transition ease-in-out duration-300"
      />
      <input
        type={'search'}
        placeholder="검색"
        id="search"
        onChange={handleSearchChange}
        className="hidden sm:block input input-bordered w-full max-w-xs"
      />

    {isSearch && (
     <ul className='menu dropdown-content p-2 shadow bg-base-100 mt-4 !fixed sm:!absolute sm:top-14 w-50 max-h-96 text-base-content overflow-y-auto'>
      {fetchedProductData.map((product:ProductData) => (
          <li key={product.id}>
            <Link 
              to={`/products/${product.id}`} 
              onClick={() => handleProductClick(product.id)}>
           <span className='text-left text-gray-600 dark:text-white line-clamp-2'>
            {product.title}
            </span> 
            </Link>
          </li>
      ))}
     </ul> 
    )}
    </div>
  )
}

export default Search