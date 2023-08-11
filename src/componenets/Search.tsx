import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getPost } from '../store/ProductsAtoms';

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
  const fetchProductData = useRecoilValue(getPost);
  const [fetchedProductData, setFetchedProductData] = useState<ProductData[]>([]);

  const handleSearchChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    
    const value = event.target.value.toLowerCase();
    
    const matchingSearch = (props.products || []).filter(
      (product: ProductData) => product.title.toLowerCase().includes(value)
    );
      setSearchArr(matchingSearch);
      setIsSearch(value.length > 0);
      console.log('matching:',matchingSearch);
      //console.log(toggleDropDown);
  }

  const handleProductClick = (productId: number) => {
    // 페이지를 프로그래밍 방식으로 이동
    navigate(`/products/${productId}`);
  };

  useEffect(() => {
    // fetchedProductData를 통해 네트워크 요청을 시작하고 데이터를 가져옴
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
  }, [fetchProductData]); // fetchedProductData가 변경될 때마다 실행


  return (
    <div>
      <input 
      type={'search'}
      placeholder="검색"
      id="search"
      onChange={handleSearchChange}
      // onFocus={toggleDropDown}
      // onBlur={closeDropDown}
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
     <ul className='menu dropdown-content p-2 shadow bg-base-100 w-52 mt-4 !fixed right-20 sm:!absolute sm:top-14  w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600'>
      {fetchedProductData.map((product:ProductData) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`} onClick={() => handleProductClick(product.id)}>
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