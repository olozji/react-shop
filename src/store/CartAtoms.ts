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

// export const addToCart = (product: ProductData) => {
//   return (set: SetterOrUpdater<ProductData[]>) => {
//     set((prevCart) => {
//       // 동일한 상품이 이미 장바구니에 있는지 확인
//       const existingProduct = prevCart.find((productToAdd) => productToAdd.id === product.id);

//       if (existingProduct) {
//         // 이미 장바구니에 상품이 있는 경우, 수량을 증가시키지 않고 그대로 반환
//         return prevCart;
//       } else {
//         // 장바구니에 상품이 없는 경우, 새로운 상품을 추가합니다.
//         return [...prevCart, product];
//       } 
//   });
// };
// };


  export const removeFromCart = (productId: number)  => {
    return ({ set }: { set: (newCart: ProductData[] | ((prevCart: ProductData[]) => ProductData[])) => void }) => {
      set((prevCart) => prevCart.filter((product) => product.id !== productId));
    };
  }

