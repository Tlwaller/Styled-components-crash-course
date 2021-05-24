import React from 'react'
import styled, { css } from 'styled-components';

import { FadeIn, Wrapper } from './Styled'

const OuterWrapper = styled.div`
    width: 100%;
    background-color: plum;
    margin-top: 2rem;
`

const StyledButton = styled.button`
    background-color: white;
    color: palevioletred;
    font-size: 1.2rem;
    margin: ${({ margin }) => margin || '2rem'};
    padding: .5rem 1rem;
    border: 1px solid palegoldenrod;
    border-radius: 3px;

    ${({primary}) => primary && css`
        background-color: palevioletred;
        color: white;
        box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
    &:hover{
        color: white;
        background-color: palevioletred;
    }

    ${OuterWrapper}:hover & {
        color: paleturquoise;
    }

    & .someClass {
        color: blue;
    }

    animation: 2s ${FadeIn} ease-in;
`;

const SuperButton = styled(StyledButton)`
    font-size: 2.5rem;
`

const Button = ({primary, margin, children}) => {
    return (
        <OuterWrapper>
            <StyledButton margin={margin} primary={primary}>{children}</StyledButton>
            <SuperButton>
                SUPER {children}
                <p className="someClass">Test</p>
                </SuperButton>
        </OuterWrapper>
        )
}

export default Button;