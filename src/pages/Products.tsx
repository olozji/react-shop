import React, {useState, useEffect} from 'react'
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { getPost, getSelectedProduct, selectedProductState } from '../store/ProductsAtoms';
import { useParams } from 'react-router-dom';

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
          {selectedProduct.rate} / {selectedProduct.count} 참여
        </div>
      </div>
      <p className="mt-2 mb-4 text-3xl">${selectedProduct.price}</p>
      <div className="card-actions">
        <button className="btn btn-primary">
          장바구니에 담기
        </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Products