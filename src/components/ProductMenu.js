import React from 'react'
import {ProductConsumer} from '../context';
import Product from './Product';
import '../App.css'



export default function Productmenu(props) {
    
    return (
        <div>
            <div style={{marginTop: '10rem'}}></div>
            <ProductConsumer>
               {value=>(
                   value.products.map(product =>(

                        <Product key={product.id} product={product} />
                        

                   ))
               )} 
            </ProductConsumer>
        </div>
    )
}
