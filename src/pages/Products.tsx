import React, {useState, useEffect} from 'react'
import { RecoilState, SetterOrUpdater, useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { getPost, productListState, productsState, selectedProductState } from '../store/ProductsAtoms';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addToCart, cartState, cartItemCountState } from '../store/CartAtoms';

interface ProductData {
  quantity?:any;
  id?: number;
  title?: string;
  price?: number | string;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate?: number;
    count?: number;
  };
  
}


const Products : React.FC<ProductData> = (props) => {


  const selectedProduct = useRecoilValue(selectedProductState) as ProductData;
  const cartItemCount = useRecoilValue(cartItemCountState); 
  const setCart = useSetRecoilState(cartState);
  const addToCartHandler = addToCart(selectedProduct);
  console.log(selectedProduct);
  console.log('cartItemCount:', cartItemCount);


   const handleAddToCart = () => {
      addToCartHandler(setCart);
   }



 



  return (
    <section className='pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto'>
    <div className="text-sm breadcrumbs">
    <ul>
      <li>{selectedProduct?.title}</li>
    </ul>
  </div>
  <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
    <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
      <img
        src={selectedProduct?.image}
        alt={selectedProduct?.title}
        className="object-contain w-full h-72"
      />
    </figure>
    <div className="card-body px-1 lg:px-12">
      <h2 className="card-title">
        {selectedProduct?.title}
        <span className="badge badge-accent ml-2">NEW</span>
      </h2>
      <p>{selectedProduct?.description}</p>
      <div className="flex items-center mt-3">
        <div className="rating rating-half"></div>
        <div className="ml-2">
          {selectedProduct?.rating?.rate} / {selectedProduct?.rating?.count} 참여
        </div>
      </div>
      <p className="mt-2 mb-4 text-3xl">${selectedProduct?.price}</p>
      <div className="card-actions">
        <button className="btn btn-primary" onClick={handleAddToCart}>
          장바구니에 담기
        </button>
        <Link to ={'/cart'}>장바구니로 이동</Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default Products