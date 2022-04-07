import { ReactNode } from 'react';
import { MainStyled } from './styled'

type MainProps = {
    children: ReactNode;
}

export const Main = ({children}: MainProps) => {
    
    return (
        <MainStyled>
            {children}
        </MainStyled>
    );
};