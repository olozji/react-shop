import React from 'react'
import CartItem from './CartItem'
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { productsState } from '../store/ProductsAtoms';
import { cartItemCountState, cartState,cartItemQuantityState } from '../store/CartAtoms';
//import { ProductData } from './ItemList';

export interface ProductData {
  
  id:number;
  title:string;
  price?:string;
  category:string;
  description:string;
  image:string;
  rating: {
      rate: number;
      count: number;
    };
    quantity?:number;
}

const CartList = (props:any & ProductData) => {

  const cartItems = useRecoilValue(cartState);
  const cartItemCount = useRecoilValue(cartItemCountState);
  const quantities = useRecoilValue(cartItemQuantityState);
  console.log(cartItems);
 

   // 중복 없는 상품 리스트를 만듭니다.
  //  const uniqueCartItems: ProductData[] = [];
  //  cartItems.forEach((item:ProductData|any) => {
  //    if (!uniqueCartItems.some((uniqueItem) => uniqueItem.id === item.id)) {
  //      uniqueCartItems.push({...item});
  //    }
  //  });
  const uniqueCartItems: ProductData[] = [];
  cartItems.forEach((item: ProductData | any) => {
    if (!uniqueCartItems.some((uniqueItem) => uniqueItem.id === item.id)) {
      uniqueCartItems.push({ ...item, quantity: quantities[item.id] || 0 });
    }
  });

  //  const quantities: { [key: number]: number } = {};
  //  cartItems.forEach((item: ProductData | any) => {
  //    quantities[item.id || 0] = item.quantity || 0;
  //  });


  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item:ProductData|any) => {
      const price = parseFloat(item.price);
      total += price;
    });
    return total;
  }

  return (
    <>
    <div className="lg:flex justify-between mb-20">
    <div>
      {uniqueCartItems.map((item: ProductData | any ) => (
        <CartItem
          image={item.image}
          id={item.id}
          key={item.id}
          price={item.price}
          title={item.title} 
          quantity={quantities[item.id]  || 0} 
          category={''} 
          description={''} 
          rating={{
            rate: 0,
            count: 0
          }}                      />
      ))}
    </div>
    <div className="self-start shrink-0 flex items-center mt-10 mb-20">
      <span className="text-xl md:text-2xl">
      총 : ${getTotalPrice().toFixed(2)}
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