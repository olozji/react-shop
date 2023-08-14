import React,{useEffect} from 'react'
import CartItem from './CartItem'
import { useSetRecoilState, useRecoilValue, useRecoilState} from 'recoil';
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
  const [cartItemss, setCartItems] = useRecoilState(cartState);
  const quantities = useRecoilValue(cartItemQuantityState);
  console.log(cartItems);
 


  const uniqueCartItems: ProductData[] = [];
  cartItems.forEach((item: ProductData | any) => {
    if (!uniqueCartItems.some((uniqueItem) => uniqueItem.id === item.id)) {
      uniqueCartItems.push({ ...item, quantity: quantities[item.id] || 0 });
    }
  });


  const getTotalPrice = () => {
    let total = 0;
    uniqueCartItems.forEach((item:ProductData|any) => {
      const price = parseFloat(item.price);
      total += price;
    });
    return total;
  }

  useEffect(() => {
    getTotalPrice();
  }, [cartItems, quantities]);

  const totalCartPrice = cartItems.reduce(
    (total, item:any) => total + (parseFloat(item.price) * item.quantity || 0),
    0
  );

  const CartItemAllBuy = () => {
      setCartItems([]);
  };
  
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
          }}                      
          />
      ))}
    </div>
    <div className="self-start shrink-0 flex items-center mt-10 mb-20">
      <span className="text-xl md:text-2xl">
      총 : ${totalCartPrice.toFixed(2)}
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
            onClick={CartItemAllBuy}
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