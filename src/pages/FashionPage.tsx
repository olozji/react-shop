import React, {useEffect, useState} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { getPost, productsState, selectedProductState } from '../store/ProductsAtoms'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export interface ProductData {
    id:number;
    title:string;
    price:string;
    category:string;
    description:string;
    image:string;
    rating: {
        rate: number;
        count: number;
      };
}

const FashionPage = ({category=''}: {category:string}) => {

    const allProducts = useRecoilValue(getPost);
    const fashionProducts = allProducts.filter((product:ProductData) => product.category === "men's clothing" || product.category === "women's clothing");

    const products = useRecoilValue(productsState);
    const [selectedProduct, setSelectedProduct] = useRecoilState(selectedProductState);


    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
      if (category === "men's clothing" && "women's clothing") {
        setCategoryName('패션');
      } else if (category === 'electronics') {
        setCategoryName('디지털');
      } else if (category === 'jewelery') {
        setCategoryName('액세서리');
      } 
    },[categoryName])


  return (
    <section className="main">
    <section className='pt-20 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto'>
     <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
            {categoryName}
          </h2>
          <nav className="flex text-base" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium">
        <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        홈
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" className="ml-1 text-sm font-medium">{categoryName}</a>
      </div>
    </li>
  </ol>
</nav>
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-2 item_list lg:pt-20'>
    {fashionProducts.map((product:ProductData) => (
  
    <Link to={`/products/${product.id}`} key={product.id} onClick={() => setSelectedProduct(product)}>
    <div className="card shadow-xl m-2">
        <figure className='w-30 h-72 bg-white'>
        <img className='w-60 max-h-[100%] hover:scale-110 ease-linear duration-200"'
         src={product.image}/>
        </figure>
         <div className="card-body h-52 items-center">
         <h2 className='card-title lg:text-xl md:text-sm'>{product.title}</h2>
        <h2 className='text-base font-bold lg:text-3xl md:text-sm'>${product.price}</h2> 
      </div>
    </div>
    </Link>

     ))}
    </div>
    </section>
    </section>
  )
}

const Wrapper = styled.div`
  .card figure img {
    /* max-height: 50%; */
    max-width: 40%;
  }

  .duration-300 {
    transition-duration: 0.3s;
  }

  .transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card:hover {
    img {
      transform: scale(120%);
    }
  }
`;

export default FashionPage