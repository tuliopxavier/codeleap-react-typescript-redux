import type { MainProps } from '../../types/MainTypes'
import { MainStyled } from './styled'

export const Main = ({children}: MainProps) => {
    return (
        <MainStyled>
            {children}
        </MainStyled>
    );
};