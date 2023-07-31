import React from 'react'
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
}

interface State {
  productStore: {
    [key: string]: ProductData[]
  }
}

const Products = ({category=''}) => {
  const productData = useRecoilValue(getPost);

  return (
    <section className='pt-20'>
      <div className='flex'>
      {productData.map((product:any) => (
    <div className="card shadow-xl m-2" key={product.id}>
        <figure className='h-72 bg-white'>
        <img className='w-80 max-h-[100%] hover:scale-110 ease-linear duration-200"' src={product.image}/>
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

export default Products