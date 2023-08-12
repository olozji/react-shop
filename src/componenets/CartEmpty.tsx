import React from 'react'
import {Link} from 'react-router-dom';

const Cart = () => {
  return (
    <section className='pt-16'>
  <div className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
    <h1 className='text-4xl'>장바구니에 물품이 없습니다</h1>
    <div className="card-body px-1 lg:px-12">
      <p className="mt-2 mb-4 text-3xl"></p>
      <div className="card-actions">
        <button className='btn btn-primary'>
            <Link to ='/'>담으러 가기</Link>
            </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Cart