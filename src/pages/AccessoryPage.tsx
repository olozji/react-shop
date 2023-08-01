import React, {useEffect ,useState } from 'react'
import { useRecoilValue } from 'recoil';
import { categoryNameSelector, categoryState, getPost } from '../store/ProductsAtoms'

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
    <section className='pt-20'>
      <h2>홈 &lt; {categoryName}</h2>
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list'>
    {accessoryProducts.map((product:ProductData) => (
    <div className="card shadow-xl m-2" key={product.id}>
        <figure className='w-30 h-72 bg-white'>
        <img className='w-60 max-h-[100%] hover:scale-110 ease-linear duration-200"' src={product.image}/>
        </figure>
         <div className="card-body h-52">
         <h2>{product.title}</h2>
        <h2 className='card-title'>${product.price}</h2> 
      </div>
    </div>
     ))}
    </div>
     
    </section>
  )
}

export default AccessoryPage