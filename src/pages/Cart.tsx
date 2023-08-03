import React from 'react'
import {Link} from 'react-router-dom';
import CartEmpty from '../componenets/CartEmpty';
import CartList from '../componenets/CartList';
import { useRecoilValue } from 'recoil';
import { cartItemCountState } from '../store/CartAtoms';


const Cart = () => {

  const cartItemCount = useRecoilValue(cartItemCountState);
  console.log('cartItemCount:' , cartItemCountState);

  return (
    <section className='pt-16'>
    <div className="text-sm breadcrumbs">
    <ul>
      <li>홈</li>
      <li>장바구니</li>
    </ul>
  </div>
  <div className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
   <div>{cartItemCount === 0 ? <CartEmpty/> : <CartList/>}</div>
  </div>
</section>
  )
}

export default Cart