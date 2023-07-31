import React from 'react'
import { useRecoilValue } from 'recoil'
import { getPost } from '../store/ProductsAtoms'
import styled from 'styled-components';


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

const FashionPage = () => {

    const allProducts = useRecoilValue(getPost);
    const fashionProducts = allProducts.filter((product:ProductData) => product.category === "men's clothing" || product.category === "women's clothing");

  return (
    <section className='pt-20'>
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list'>
    {fashionProducts.map((product:ProductData) => (
    <div className="card shadow-xl m-2" key={product.id}>
        <figure className='w-30 h-72 bg-white'>
        <img className='w-60 max-h-[100%] hover:scale-110 ease-linear duration-200"' src={product.image}/>
        </figure>
         <div className="card-body h-52">
         <h2>{product.title}</h2>
        <h2 className='card-title'>${product.price}</h2> 
      </div>
    </div>
     ))}
    </div>
     
    </section>
  )
}

export default FashionPage