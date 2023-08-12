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
    <nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        홈
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">장바구니</a>
      </div>
    </li>
  </ol>
</nav>
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