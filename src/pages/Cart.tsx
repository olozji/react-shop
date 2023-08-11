import React from 'react'
import {Link} from 'react-router-dom';
import CartEmpty from '../componenets/CartEmpty';
import CartList from '../componenets/CartList';
import { useRecoilValue } from 'recoil';
import { cartItemCountState } from '../store/CartAtoms';
import styled from 'styled-components';

const Cart = () => {

  const cartItemCount = useRecoilValue(cartItemCountState);
  console.log('cartItemCount:' , cartItemCountState);

  return (
    <Wrraper>
    <section className="main pt-16">
    <section className='pt-4 lg:pt-5 pb-4 lg:pb-20 px-4 xl:px-2 xl:container mx-auto'>
    <div className="text-sm breadcrumbs">
    <ul>
      <li>홈</li>
      <li>장바구니</li>
    </ul>
  </div>
  <div className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
   <div>{cartItemCount === 0 ? <CartEmpty/> : <CartList props={cartItemCount}/>}</div>
  </div>
</section>
</section>
</Wrraper>
  )
}

export const Wrraper = styled.div`
  min-height: calc(100vh - 4rem - 224px);
`

export default Cart