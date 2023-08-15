import React, {useState, useEffect} from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { getData, getSelectedProduct, productsState, selectedProductState } from '../store/ProductsAtoms';
import { Link, useParams } from 'react-router-dom';
import { addToCart, cartState, cartItemCountState } from '../store/CartAtoms';
import styled from 'styled-components';

interface ProductData {
  quantity?:any;
  id?: number;
  title?: string;
  price?: number | string;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate?: number;
    count?: number;
  };
  
}


const Products : React.FC<ProductData> = (props) => {

  const { id } = useParams(); // URL에서 productId 추출
  const [categoryName, setCategoryName] = useState('');
  //const selectedProduct = useRecoilValue(selectedProductState) as ProductData;
  const [selectedProduct, setSelectedProduct]:any = useRecoilState(selectedProductState);
  const cartItemCount = useRecoilValue(cartItemCountState); 
  const setCart = useSetRecoilState(cartState);
  const addToCartHandler = addToCart(selectedProduct);
 
  const fetchProductData = useRecoilValue(getData);
  const fetchedProductData = useRecoilValue(getSelectedProduct);

  console.log(selectedProduct);
  console.log('cartItemCount:', cartItemCount);


   const handleAddToCart = () => {
      addToCartHandler(setCart);
   }

   const ratingStar = () => {
    const stars = [];
    const rate = selectedProduct?.rating?.rate || 0;
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 !== 0;
  
    for (let i = 0; i < fullStars; i++) {
      stars.push( 
      <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>);
    }
  
    if (hasHalfStar) {
      stars.push( 
      <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>);
    }
  
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push( 
      <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>);
    }
  
    return stars; // Return the JSX elements
  };


  const fetchData = async (productId: number) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };



  useEffect(() => {
    if (selectedProduct?.category === "men's clothing" || selectedProduct?.category === "women's clothing") {
      setCategoryName('패션');
    } else if (selectedProduct?.category === 'electronics') {
      setCategoryName('디지털');
    } else if (selectedProduct?.category === 'jewelery') {
      setCategoryName('액세서리');
    } 
  },[selectedProduct]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productData = await fetchData(Number(id));
        setSelectedProduct(productData || null);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [id, setSelectedProduct]);

 


  return (
    <Wrraper>
    <section className="main pt-16">
    <section className='pt-4 lg:pt-5 pb-4 lg:pb-20 px-4 xl:px-2 xl:container mx-auto'>
  <nav className="flex" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
      <li className="inline-flex items-center">
       <a href="#" className="inline-flex items-center text-sm font-medium">
          <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          </svg>
          {categoryName}
        </a>
     </li>
    <li>
      <div className="flex items-center">
        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" className="ml-1 text-sm font-medium">{selectedProduct?.title}</a>
      </div>
    </li>
  </ol>
</nav>
  <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
    <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
      <img
        src={selectedProduct?.image}
        alt={selectedProduct?.title}
        className="object-contain w-full h-80 md:w-50"
      />
    </figure>
    <div className="card-body px-1 lg:px-12">
      <h2 className="card-title text-3xl">
        {selectedProduct?.title}
        <span className="badge badge-accent ml-2">NEW</span>
      </h2>
      <p className='text-2xl'>{selectedProduct?.description}</p>
      <div className="flex items-center mt-3">
        <div className="rating rating-half">{ratingStar()}</div>
        <div className="ml-2 text-xl">
          {selectedProduct?.rating?.rate} / {selectedProduct?.rating?.count} 참여
        </div>
      </div>
      <p className="mt-2 mb-4 text-3xl">${selectedProduct?.price}</p>
      <div className="card-actions">
        <button className="btn btn-primary" 
                onClick={handleAddToCart}>
          장바구니에 담기
        </button>
        <button className="btn btn-outline ml-1">
        <Link to ={'/cart'}>장바구니로 이동</Link>
        </button>
      </div>
    </div>
  </div>
</section>
</section>
</Wrraper>
  )
}

export const Wrraper = styled.div`
  min-height: calc(100vh - 4rem - 224px);
`

export default Products