import React, {useState, useEffect} from 'react'
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { getPost, productListState, productsState, selectedProductState } from '../store/ProductsAtoms';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addToCart, cartState, cartItemCountState } from '../store/CartAtoms';

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

const Products = () => {


  const {id} = useParams<{id:string}>();
 // const id = Number(params.pid);
  const selectedProduct = useRecoilValue(selectedProductState);

  console.log(selectedProduct);

  const product = useRecoilValue(productsState);
  const setCart = useSetRecoilState(cartState);

  const setCartItemCount = useRecoilValue(cartItemCountState);

  const addToCart = (productToAdd : ProductData) => {
    setCart((prevCart) => [...prevCart, productToAdd]);
  }

  

  const handleAddToCart = () => {
    const productToAdd : ProductData = {
      id: 1,
      title: '',
      price: 0,
      category: '',
      description: '',
      image: '',
      rating: {
        rate: 0,
        count: 0,
      },
    }
    addToCart(productToAdd);
  };
  

  
  if(!selectedProduct){
    return <div>상품이 존재하지 않습니다.</div>
  }


  return (
    <section>
    <div className="text-sm breadcrumbs">
    <ul>
      <li>{selectedProduct.title}</li>
    </ul>
  </div>
  <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
    <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
      <img
        src={selectedProduct.image}
        alt={selectedProduct.title}
        className="object-contain w-full h-72"
      />
    </figure>
    <div className="card-body px-1 lg:px-12">
      <h2 className="card-title">
        {selectedProduct.title}
        <span className="badge badge-accent ml-2">NEW</span>
      </h2>
      <p>{selectedProduct.description}</p>
      <div className="flex items-center mt-3">
        <div className="rating rating-half"></div>
        <div className="ml-2">
          {selectedProduct.rating?.rate} / {selectedProduct.rating?.count} 참여
        </div>
      </div>
      <p className="mt-2 mb-4 text-3xl">${selectedProduct.price}</p>
      <div className="card-actions">
        <button className="btn btn-primary" onClick={() =>addToCart(product)}>
          장바구니에 담기
        </button>
        <Link to ='/cart'>장바구니로 이동</Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default Products