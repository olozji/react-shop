import React from 'react'
import { useRecoilValue } from 'recoil';
import { getPost } from '../store/ProductsAtoms'

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

const AccessoryPage = () => {

    const allProducts = useRecoilValue(getPost);
    const accessoryProducts = allProducts.filter((product:ProductData) => product.category === "jewelery");



  return (
    <section className='pt-20'>
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list'>
    {accessoryProducts.map((product:ProductData) => (
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

export default AccessoryPage