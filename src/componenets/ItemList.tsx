import React from 'react'

const ItemList = ({page, category}: {page:string; category:string}) => {
  return (
    <section>
    <div className="card shadow-xl m-2">
        <figure className='h-72 bg-white'>
        <h2>figure</h2>
        <img className='w-1'/>
        </figure>
        {/* <div className='card-body h-52'>
            <h2>
                <div>card body</div>
                <div>card body</div>
                <div>card body</div>
                <div>card body</div>
            </h2>
        </div> */}
         <div className="card-body h-52">
        <h2 className='card-title'>cardbody</h2> 
        <p className='card-text'>cardtext</p>
      </div>
    </div>
    </section>
  )
}

export default ItemList