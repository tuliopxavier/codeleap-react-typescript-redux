import { render as rtlRender, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { SignUpPage } from '.';
import { store } from '../../redux/store';

const render = (component: ReactElement) => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
);

describe('Sign up page', () => {
    it('should render sign up page', () => {
        render(<SignUpPage/>);
        expect(screen.getByText('Welcome to CodeLeap network!')).toBeTruthy();
        expect(screen.getByText('Enter')).toBeTruthy();
    });
});