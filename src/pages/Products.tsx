import React, {useState, useEffect} from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { getPost, getSelectedProduct, productsState, selectedProductState } from '../store/ProductsAtoms';
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
 
  const fetchProductData = useRecoilValue(getPost);
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
      stars.push(<span key={i} className='star-icon'>★</span>);
    }
  
    if (hasHalfStar) {
      stars.push(<span key='half' className='star-icon'>½</span>);
    }
  
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className='star-icon'>☆</span>);
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
    if (selectedProduct?.category === "men's clothing" && "women's clothing") {
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
    <div className="text-base breadcrumbs">
    <ul>
      <li>{categoryName}  &lt; {selectedProduct?.title}</li>
    </ul>
  </div>
  <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
    <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image w-96">
      <img
        src={selectedProduct?.image}
        alt={selectedProduct?.title}
        className="object-contain w-full h-80"
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
        <button className="btn btn-primary" onClick={handleAddToCart}>
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