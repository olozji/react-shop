import  axios  from "axios";
import { atom, selector } from "recoil"


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




interface PostState {
    loading:boolean;
    data:ProductData[] | null;
    error: Error | null;
}


export const productListState = atom<PostState>({
    key:'productListState',
    default:{
        loading:false,
        data:null,
        error:null,
    }
})

export const getPost = selector({
    key:'getPost',
    get: async () => {
        const res = await fetch('https://fakestoreapi.com/products/');
        const data = await res.json();
        return data;
    }
}) ;

export const categoryState = atom({
    key:'categoryName',
    default:''
})

export const categoryNameSelector = selector({
    key:'categoryNameSelector',
    get: ({get}) => {
        const category = get(categoryState);

        switch(category) {
            case "men's clothing" : case "women's clothing":
                return '패션';
            case 'electronics':
                return '디지털';
            case 'jewelery':
                return '액세서리';
            default:
                return '';
        }
    }
})


