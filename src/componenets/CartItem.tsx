import React from 'react'
import { useRecoilValue } from 'recoil';
import { cartItemCountState } from '../store/CartAtoms';
import {Link} from 'react-router-dom';

const CartItem = (props: any) => {


  const cartItemCount = useRecoilValue(cartItemCountState);

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
        ${(props.price * cartItemCount).toFixed(2)}
      </p>
      <div className="card-actions">
        <div className="btn-group">
          <button className="btn btn-primary">
            -
          </button>
          <button className="btn btn-ghost no-animation">
            {cartItemCount}
          </button>
          <button className="btn btn-primary">
            +
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartItem