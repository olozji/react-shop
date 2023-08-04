import { SetterOrUpdater, atom,selector,useRecoilState,useSetRecoilState } from "recoil";


export interface ProductData {
    quantity: number;
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

// 장바구니 상태
export const cartState = atom<ProductData[]>({
    key:'cartState',
    default:[],
    
    
})


// 장바구니에 상품을 카운트
export const cartItemCountState = selector<number>({
    key:'cartItemCountState',
    get:({get}) => {
        const cart = get(cartState);
        return cart.length;
       
    }
})

export const cartItemCountDefaultState = atom<number>({
  key: 'cartItemCountDefaultState',
  default: 0,
});

// 장바구니에 상품을 추가, 삭제

export const addToCart = (product: ProductData) => {
  return (set: SetterOrUpdater<ProductData[]>) => {
    set((prevCart) => [...prevCart, product]);
    console.log(product);
  };
};


  // export const removeFromCart = (productId: number)  => {
  //   return ({ set }: { set: (newCart: ProductData[] | ((prevCart: ProductData[]) => ProductData[])) => void }) => {
  //     set((prevCart) => prevCart.filter((product) => product.id !== productId));
  //   };
  // }

export const removeFromCart = (productId: number) => {
  return (set: SetterOrUpdater<ProductData[]>) => {
    set((prevCart) => prevCart.filter((product) => product.id !== productId));
  };
};
