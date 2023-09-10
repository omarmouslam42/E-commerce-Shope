import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const productContext = createContext()  

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);

useEffect(() => {
const AllProducts= async()=>{
  try {
    let { data } = await axios.get(`https://fakestoreapi.com/products`)
    // console.log(data);
    setProducts(data)
  } catch (error) {
    console.log(error);
  }
}

AllProducts()
}, []);

  return <productContext.Provider value={{products}}>{children}</productContext.Provider>;
};
export default ProductProvider;
