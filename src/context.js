import React, {createContext, useState} from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = createContext();


const ProductProvider = ({children}) => {
const [getProduct, setGetProduct] = useState({

    products: storeProducts,
    detailProduct: detailProduct,
    
});
const getItem = (id) =>{
    const product = getProduct.products.find(items => items.id === id);
    return product;
}
const handleDetail = (id) =>{
    const product = getItem(id);
    setGetProduct(()=>{
        return {...getProduct, detailProduct: product}
    });
}
    return(
       <ProductContext.Provider value={{
           ...getProduct,
           handleDetail: handleDetail
       }} >
           {children}
       </ProductContext.Provider>
    );
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer, ProductProvider}






// font-family: 'Lato', sans-serif;
// font-family: 'Montserrat Alternates', sans-serif;
// font-family: 'Sansita Swashed', cursive;