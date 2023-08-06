import {useState} from 'react'
import { useRecoilState } from 'recoil';
import { addToCart, removeFromCart, cartItemCountDefaultState } from '../store/CartAtoms';
import {Link} from 'react-router-dom';


export interface ProductData {
  quantity:number;
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


const CartItem = (props:  ProductData) => {

  const [quantity, setQuantity] = useState(props.quantity || 0);
  const [cartItemCount, setCartItemCount] = useRecoilState(cartItemCountDefaultState);
  //const cartItemCount = useRecoilValue(cartItemCountState);


  const handleAddToCart = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setCartItemCount((prevCount) => prevCount + 1);
    addToCart({ ...props, quantity: quantity + 1 });
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setCartItemCount((prevCount) => prevCount - 1);
      removeFromCart(props.id);
    }
  };


  //const cartItemCount = useRecoilValue(cartItemCountState);
  //const setCartItemCount = useSetRecoilState(cartState);

  // const cartItems = useRecoilValue(cartState);
  // const setCartItems = useSetRecoilState(cartState);

  // const [quantity, setQuantity] = useState(1);

  //  // 장바구니에 해당 상품이 이미 담겨있는지 확인하는 함수
  //  const isProductInCart = (productId: number) => {
  //   return cartItems.some((item) => item.id === productId);
  // };

  // // 장바구니에 해당 상품의 수량을 가져오는 함수
  // const getProductQuantityInCart = (productId: number) => {
  //   const item = cartItems.find((item) => item.id === productId);
  //   return item ? item.quantity : 0;
  // };

   // 상품 수량이 변경될 때마다 quantity 값을 업데이트
  //  useEffect(() => {
  //   setQuantity(getProductQuantityInCart(props.id));

  // }, [cartItems, props.id]);
 
  // const handleAddToCart = () => {
  //   addToCart({...props, quantity});
  //   setQuantity((prevQuantity) => prevQuantity + 1);
  // };

  // const handleRemoveFromCart = () => {
  //   if (props.quantity && props.quantity > 0) {
  //     removeFromCart(props.id);
  //   }
  // };

  // const handleRemoveFromCart = () => {
  //   if (quantity > 0) {
  //     removeFromCart(props.id);
  //     setQuantity((prevQuantity) => prevQuantity - 1);
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
      ${(props.price)}
      </p>
      <div className="card-actions">
        <div className="btn-group">
          <button className="btn btn-primary" onClick={handleRemoveFromCart}>
            -
          </button>
          <button className="btn btn-ghost no-animation">
            {quantity}
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