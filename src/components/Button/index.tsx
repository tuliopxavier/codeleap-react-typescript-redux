import type { ButtonProps } from '../../types/ButtonTypes';
import { ButtonStyled } from './styled';

export const Button = ({color = "#fff", backgroundColor = "#000", children, disabled = false}: ButtonProps) => {
    
    return (
        <ButtonStyled color={color} backgroundColor={backgroundColor} disabled={disabled}>
            {children}
        </ButtonStyled>
    );
};