import type { ButtonProps } from '../../types/ButtonTypes';
import styled from 'styled-components';

export const ButtonStyled = styled.button<ButtonProps>`
width: 7rem;
padding: .75rem 0;

color: ${({ color }) => color};
background-color: ${({ backgroundColor }) => backgroundColor};

border: solid 1px ${({ color }) => color};
font-weight: 700;
font-size: 1rem;
text-transform: uppercase;
transition: .5s ease;

cursor: pointer;
cursor: ${({ disabled }) => disabled && 'not-allowed'};
opacity: ${({ disabled }) => disabled && '.25'};

&:hover {
    color: ${({ backgroundColor }) => backgroundColor};
    background-color: ${({ color }) => color};
    border: solid 1px ${({ backgroundColor }) => backgroundColor};
}

`