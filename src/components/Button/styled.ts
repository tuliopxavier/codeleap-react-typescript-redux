import type { ButtonProps } from '../../types/ButtonTypes';
import styled from 'styled-components';

export const ButtonStyled = styled.button<ButtonProps>`
width: 7rem;
padding: .75rem 0;

color: ${({ color }) => color};
background-color: ${({ backgroundColor }) => backgroundColor};

border: none;
font-weight: 700;
font-size: 1rem;
text-transform: uppercase;
transition: .75s ease;

cursor: pointer;
cursor: ${({ disabled }) => disabled && 'not-allowed'};
opacity: ${({ disabled }) => disabled && '.5'};

`