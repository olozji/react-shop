import React, {useEffect ,useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil';
import { categoryNameSelector, categoryState, getPost, selectedProductState } from '../store/ProductsAtoms'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const AccessoryPage = ({category=''}:{category:string}) => {

    const allProducts = useRecoilValue(getPost);
    const accessoryProducts = allProducts.filter((product:ProductData) => product.category === "jewelery");

    const [selectedProduct, setSelectedProduct] = useRecoilState(selectedProductState);

    const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    if (category === "men's clothing" && "women's clothing") {
      setCategoryName('패션');
    } else if (category === 'electronics') {
      setCategoryName('디지털');
    } else if (category === 'jewelery') {
      setCategoryName('액세서리');
    } 
  },[categoryName])

  return (
    <section className="main">
    <section className='pt-20 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto'>
      <h2>홈 &lt; {categoryName}</h2>
       <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
            {categoryName}
          </h2>
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-2 item_list lg:pt-20'>
    {accessoryProducts.map((product:ProductData) => (
      <Wrapper key={product.id}>
      <Link to={`/products/${product.id}`} key={product.id} onClick={() => setSelectedProduct(product)}>
    <div className="card shadow-xl m-2" key={product.id}>
        <figure className='w-30 h-72 bg-white'>
        <img className='w-60 max-h-[100%] hover:scale-110 ease-linear duration-200"' src={product.image}/>
        </figure>
         <div className="card-body h-52">
         <h2>{product.title}</h2>
        <h2 className='card-title'>${product.price}</h2> 
      </div>
    </div>
    </Link>
    </Wrapper>
     ))}
    </div>
     </section>
    </section>
  )
}

export default AccessoryPage


const Wrapper = styled.div`
  .card figure img {
    /* max-height: 50%; */
    max-width: 40%;
  }

  .duration-300 {
    transition-duration: 0.3s;
  }

  .transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card:hover {
    img {
      transform: scale(120%);
    }
  }
`;