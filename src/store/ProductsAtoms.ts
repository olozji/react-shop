import  axios  from "axios";
import { atom, selector } from "recoil"


export interface ProductData {
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
        // const res = await fetch('https://fakestoreapi.com/products');
        //  const products : ProductData[] = await res.json();

        //  let fashion: ProductData[] = [];
        //  let accessory: ProductData[] = [];
        //  let digital : ProductData[] = [];
        //  let all : ProductData[] = [];
        
        // products.forEach((product) => {
        //     switch (product.category) {
        //         case "men's clothing" :
        //             fashion.push(product)
        //         case "womens's clothing" :
        //             fashion.push(product);
        //         case 'jewelery':
        //             accessory.push(product);
        //         case "electronics" :
        //             digital.push(product);
        //         default:
        //             break;
        //     }
        //     all.push(product);
        // });
        // return { fashion, accessory, digital, all}
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data;
    }
}) ;



