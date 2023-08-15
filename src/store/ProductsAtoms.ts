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


// 상품들의 배열
export const productsState = atom<ProductData[]>({
    key:'productsState',
    default:[],
})

// 선택된 상품들의 목록
export const selectedProductState = atom<ProductData | null>({
    key: 'selectedProductState',
    default: null,
  });


  // 상품을 선택하고 해당 ID 값 가져오기
export const getSelectedProduct = selector<ProductData | null>({
  key: 'getSelectedProduct',
  get: ({ get }) => {
    const selectedProductId = get(selectedProductState);
    const products = get(productsState);
    return products.find((product) => product.id === selectedProductId) || null;
  },
});



  // 상품 API 가져오기
export const getData = selector({
    key:'getData',
    get: async () => {
        const res = await fetch('https://fakestoreapi.com/products/');
        const data = await res.json();
        return data;
    }
}) ;



