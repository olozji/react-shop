import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil';
import { cartItemCountState, addToCart, removeFromCart } from '../store/CartAtoms';
import {Link} from 'react-router-dom';


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


const CartItem = (props: ProductData) => {


  const cartItemCount = useRecoilValue(cartItemCountState);

  const handleAddToCart = () => {
    addToCart(props);
  };

  const handleRemoveFromCart = () => {
    if (cartItemCount > 0) {
      removeFromCart(props.id);
    }
  };

  //const [cartItemCount, setCartItemCount] = useRecoilState(cartItemCountState);

  // const handleAddToCart = () => {
  //   setCartItemCount((prevCount) => prevCount + 1);
  //   addToCart(props);
  // };

  // const handleRemoveFromCart = () => {
  //   if (cartItemCount > 0) {
  //     setCartItemCount((prevCount) => prevCount - 1);
  //     removeFromCart(props.id);
  //   }
  // };

  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
    <Link to={'/product/' + props.id}>
      <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
        <img
          src={props.image}
          alt="상품 이미지"
          className="object-contain w-full h-48"
        />
      </figure>
    </Link>
    <div className="card-body px-1 lg:px-12">
      <h2 className="card-title">{props.title}</h2>
      <p className="mt-2 mb-4 text-3xl">
        ${(parseFloat(props.price) * cartItemCount).toFixed(2)}
      </p>
      <div className="card-actions">
        <div className="btn-group">
          <button className="btn btn-primary" onClick={handleRemoveFromCart}>
            -
          </button>
          <button className="btn btn-ghost no-animation">
            {cartItemCount}
          </button>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            +
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartItem