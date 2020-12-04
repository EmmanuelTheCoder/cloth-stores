import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default function Navbar(props) {
    
    return (
        <Container>
            <div className="navwrapper">
                <Link to="/">
                    <h2>Havillah stores</h2>
                </Link>

                <Link to="/cart">
                <ButtonContainer title="check for products in your cart">
                    My Cart
                </ButtonContainer>
                </Link>
            </div>

        </Container>
    )
}


const Container = styled.div`
    margin-bottom: 4rem;
    .navwrapper{
        display: flex;
        justify-content: space-between;
        padding: .5rem 1rem;
        background: rgb(100,56,90);
        height: 4rem;
        position: fixed;
        top: 0;
        width: 100%;
        
    }
    a{
        text-decoration: none;
    }
    h2{
        text-transform: capitalize;
        color: white;
        font-family: 'Sansita Swashed', cursive;
        font-size: 2rem;
    }
    

`
