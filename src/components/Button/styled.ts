import type { ButtonProps } from '../../types/ButtonTypes';
import styled from 'styled-components';

export const ButtonStyled = styled.button<ButtonProps>`
  width: 7rem;
  padding: 0.75rem 0;

  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};

  border: solid 1px ${({ color }) => color};
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  transition: 0.5s ease;

  cursor: pointer;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  opacity: ${({ disabled }) => disabled && '.25'};

  &:hover {
    color: ${({ backgroundColor }) => backgroundColor};
    background-color: ${({ color }) => color};
    border: solid 1px ${({ backgroundColor }) => backgroundColor};
  }

  @media (max-width: 425px) {
    width: 6rem;
    padding: 0.5rem 0;
    font-size: 0.75rem;
  }

  @media screen and (prefers-color-scheme: dark) {
    color: #ddd;
    background-color: #222;
    border: 1px solid #ddd;

    &:hover {
      color: #222;
      background-color: #ddd;
      border: 1px solid #222;
    }
  }
`;