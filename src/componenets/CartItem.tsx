import {useState} from 'react'
import { useRecoilState,useRecoilValue } from 'recoil';
import { cartItemQuantityState,addToCart, removeFromCart, cartItemCountDefaultState, cartState, cartItemCountState } from '../store/CartAtoms';
import {Link} from 'react-router-dom';
import { ProductData } from './ItemList';



interface CartItemProps extends ProductData {
  id: number;
}



const CartItem: React.FC<CartItemProps> = (props) => {

  //const [quantity, setQuantity] = useState(props.quantity || 0);
  const cartItems = useRecoilValue(cartState);
  const cartItemCount = useRecoilValue(cartItemCountState);

  const item = cartItems.find((item) => item.id === props.id);
  const quantity = item ? item.quantity || 0 : 0;
  // const handleAddToCart = () => {
  //   setQuantity((prevQuantity) => prevQuantity + 1);
  //  // cartItemCount((prevCount:any) => prevCount + 1);
  //   addToCart({ ...props, quantity: quantity + 1 });
  // };

  // const handleRemoveFromCart = () => {
  //   if (quantity > 0) {
  //     setQuantity((prevQuantity) => prevQuantity - 1);
  //   //  setCartItemCount((prevCount:any) => prevCount - 1);
  //     removeFromCart(props.id);
  //   }
  // };

 
  const handleAddToCart = () => {
    addToCart({ ...props, quantity: quantity + 1 });
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      removeFromCart(props.id);
    }
  };




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
          <button className="btn btn-primary">
            -
          </button>
          <button className="btn btn-ghost no-animation" onClick={handleRemoveFromCart}>
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