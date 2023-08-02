import { atom,selector,useRecoilState } from "recoil";


export interface ProductData {
    id?:number;
    title?:string;
    price?:string;
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

// 장바구니에 상품을 추가, 삭제
export function addToCart(product: ProductData) {
    return ({ set }: { set: (newCart: ProductData[] | ((prevCart: ProductData[]) => ProductData[])) => void }) => {
      set((prevCart) => [...prevCart, product]);
    };
  }

  export function removeFromCart(productId: number) {
    return ({ set }: { set: (newCart: ProductData[] | ((prevCart: ProductData[]) => ProductData[])) => void }) => {
      set((prevCart) => prevCart.filter((product) => product.id !== productId));
    };
  }

