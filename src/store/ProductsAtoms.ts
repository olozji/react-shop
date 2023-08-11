import  axios  from "axios";
import { atom, selector } from "recoil"


export interface ProductData {
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
      quantity?:number;
}


export const productsState = atom<ProductData[]>({
    key:'productsState',
    default:[],
})

export const selectedProductState = atom<ProductData | null>({
    key: 'selectedProductState',
    default: null, // 기본값은 null
  });

  export const getSelectedProduct = selector<ProductData | null>({
    key: 'getSelectedProduct',
    get: ({ get }) => {
      const selectedProductId = get(selectedProductState);
      const products = get(productsState);
      return products.find((product) => product.id === selectedProductId) || null;
    },
  });

export const getPost = selector({
    key:'getPost',
    get: async () => {
        const res = await fetch('https://fakestoreapi.com/products/');
        const data = await res.json();
        return data;
    }
}) ;



