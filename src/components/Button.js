import styled from 'styled-components';

export const ButtonContainer = styled.button`
    height: ${prop => prop.cart ?  "2rem" : "2.8rem"};
    width: ${prop => prop.cart ? '3.5rem' : '7rem'};
    font-size: 1.2rem;
    background: ${prop => prop.detailcart ? ' rgb(220, 165, 40)' : 'rgb(95, 56, 95)'};
    border: 1px solid;
    color: #fff;
    border-radius: 20px 4px;
    outline: none;
    &:hover{
        background:${prop => prop.detailcart ? 'rgb(223, 167, 65)' : 'rgb(90,42,70)'};
    }
`