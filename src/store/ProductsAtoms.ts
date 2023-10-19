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

// 상품 필터링
export const filterState = atom ({
  key:'filterState',
  default:'전체'
});

export const filteredProductsState = selector({
  key: 'filteredProductsState',
  get: ({ get }) => {
    const filter = get(filterState);
    const allProducts = get(productsState);

    return allProducts.filter((product) => {
      if (filter === '전체') {
        return true; // 전체 가격 범위 선택 시 모든 상품 반환
      }

      const priceString = String(product.price);
      const productPrice = parseFloat(priceString.replace('$', '').replace(',', ''));

      if (filter === '0-50') {
        return productPrice >= 0 && productPrice <= 50;
      } else if (filter === '50-100') {
        return productPrice > 50 && productPrice <= 100;
      } else if (filter === '100-1000') {
        return productPrice > 100 && productPrice <= 1000;
      }

      return false; // 범위에 해당하지 않는 상품 제외
    });
  },
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



