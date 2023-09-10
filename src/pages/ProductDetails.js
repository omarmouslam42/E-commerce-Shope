import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { cartContext } from '../contexts/CartContext';
import { productContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const{id}=useParams()
  const{addToCart}=useContext(cartContext)
  const{products}=useContext(productContext)

    const product = products.find((item)=>{
      return item.id === parseInt(id)
    })
    // console.log(product);
   
      if (!product) {
        return <section className='w-full h-screen flex justify-center
         items-center'>Loading...</section>;
      }
 const{image,description,title,price}=product

  return <section className=' pt-20 pb-12  lg:py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
      {/* image / text */}
      <div className='flex flex-col lg:flex-row items-center'>
        {/* image */}
        <div className='flex flex-1 justify-center items-center mb-3 lg:mb-0 '>
          <img className='max-w-[190px] lg:w-sm' src={image} alt='product image'/>
        </div>
        {/* text */}
        <div className=' flex-1 text-center lg:text-left '> 
           <h1 className= 'text-[25px] font-medium mb-3 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
            <p className='mb-3	'>{description?.substring(0,200)}</p>
           
              <div className='text-xl text-red-500 font-medium mb-2 mx-auto '>$ {price}</div>
              <button onClick={()=>addToCart(id,product)} className='bg-primary py-4 px-8 text-white'> Add to Cart </button>
            
        </div>
      </div>

    </div>
  </section>;
};

export default ProductDetails;
