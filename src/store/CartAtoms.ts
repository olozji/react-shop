import { useSetRecoilState,selectorFamily,SetterOrUpdater, atom,selector } from "recoil";


export interface ProductData {
    quantity?: number;
    id?:number;
    title?:string;
    price?:string | number;
    category?:string;
    description?:string;
    image?:string;
    rating?: {
        rate?: number;
        count?: number;
      };
    }

export interface CartItemQuantityState {
  [key: number]: number;
}

// 장바구니 상태
export const cartState = atom<ProductData[]>({
    key:'cartState',
    default:[],
})


// 장바구니에 상품을 카운트
export const cartItemCountState = selector<number | any>({
    key:'cartItemCountState',
    get:({get}) => {
      let totalCount = 0;
        const cart = get(cartState);
        //return cart.length;
        const totalQuantity = cart.reduce((total, product:any) => total + product.quantity, 0);
        return totalQuantity;
    }
})


export const cartItemCountDefaultState = atom<number>({
  key: 'cartItemCountDefaultState',
  default: 0,
});

// 장바구니에 상품을 추가, 삭제

// export const addToCart = (product: ProductData) => {
//   return (set: SetterOrUpdater<ProductData[]>) => {
//     set((prevCart) => [...prevCart, product]);
//     console.log(product);
//   };
// };

// export const addToCart = (product: ProductData) => {
//   return (set: SetterOrUpdater<ProductData[] >) => {
//     set((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
//   };
// };

export const addToCart = (product: ProductData, quantityToAdd: number = 1) => {
  return (set: SetterOrUpdater<ProductData[]>) => {
    set((prevCart:any) => {
      const existingProduct = prevCart.find((item:any) => item.id === product.id);
      if (existingProduct) {
        const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + quantityToAdd };
        return prevCart.map((item:any) => (item.id === product.id ? updatedProduct : item));
      } else {
        return [...prevCart, { ...product, quantity: quantityToAdd }];
        
      }
    });
  };
};



export const removeFromCart = (productId: number) => {
  return (set: SetterOrUpdater<ProductData[]>) => {
    set((prevCart) => prevCart.filter((product) => product.id !== productId));
  };
};

export const cartItemQuantityState = atom<CartItemQuantityState>({
  key: 'cartItemQuantityState',
  default: {},
});
