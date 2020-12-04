import React from 'react'
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default function Details(props) {
    

    return (
        <div>
            <ProductConsumer>
                {value =>{
                     const {price, img, id, company, title, info, inCart} = value.detailProduct
                  
                     return(
                         <DetailContainer className="container" >
                             <div className="company">
                                 <h2 title="black gown">{title}</h2>
                             </div>
                             <div className="image-container">
                                 <img src={img} alt="title"/>
                             </div>
                             <div className="price">
                                <h2><strong>Price: </strong>${price}</h2>
                                <h3><strong>Company:</strong> {company}</h3>
                             </div>
                             <div className="description">
                                 <strong>Product description: </strong>
                                 <p className="product-info">
                                     {info}
                                 </p>
                             </div>
                             <div className="buttons">
                                <ButtonContainer detailcart>
                                    Add to cart
                                </ButtonContainer>
                             </div>
                         </DetailContainer>
                     )
                }}
                
            </ProductConsumer>
           
        </div>
    )
}

const DetailContainer = styled.div`
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        text-align: center;
    }
    .company h2{
        text-transform: capitalize;
        font-family: cursive;
        font-size: 2.1rem;
        font-weight: 400;
        color: #474747;
        
    }
    .description{
            padding-top: 1.2rem;
            p{
                font-size: 1.2rem;
            }
        strong{
            font-size: 1.4rem;
            color: #524e4f
        }
    }
    .price{
        text-align: justify;
        strong{
            color: #524e4f
        }
    }
    
`
