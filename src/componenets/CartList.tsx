import React from 'react'
import CartItem from './CartItem'
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { productsState } from '../store/ProductsAtoms';
import { cartState } from '../store/CartAtoms';
import { ProductData } from './ItemList';

const CartList = () => {

  const product = useRecoilValue(productsState);
  const cartItems = useRecoilValue(cartState);
  console.log(cartItems);
  

  return (
    <>
    <div className="lg:flex justify-between mb-20">
    <div>
      {cartItems.map((item: any) => (
        <CartItem
          image={item.image}
          id={item.id}
          key={item.id}
          price={item.price}
          title={item.title}
        />
      ))}
    </div>
    <div className="self-start shrink-0 flex items-center mt-10 mb-20">
      <span className="text-xl md:text-2xl">
      </span>
      <label
        htmlFor="confirm-modal"
        className="modal-button btn btn-primary ml-5"
      >
        구매하기
      </label>
    </div>
  </div>
  <div>
    <input type="checkbox" id="confirm-modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
        <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
        <div className="modal-action">
          <label
            htmlFor="confirm-modal"
            className="btn btn-primary"
          >
            네
          </label>
          <label htmlFor="confirm-modal" className="btn btn-outline">
            아니오
          </label>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default CartList