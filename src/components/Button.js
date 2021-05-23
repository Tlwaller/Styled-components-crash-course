import React from 'react'
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
    background-color: white;
    color: palevioletred;
    font-size: 1.2rem;
    margin: 1rem;
    padding: .5rem 1rem;
    border: 1px solid palegoldenrod;
    border-radius: 3px;

    ${({primary}) => primary && css`
        background-color: palevioletred;
        color: white;
        box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
`;

const SuperButton = styled(StyledButton)`
    font-size: 2.5rem;
`

const Button = ({primary, children}) => {
    return (
        <>
        <StyledButton primary={primary}>{children}</StyledButton>
        <SuperButton>SUPER {children}</SuperButton>
        </>
        )
}

export default Button;