import { fireEvent, render as rtlRender, screen } from '@testing-library/react';
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

    test('button availability', () => {
        render(<SignUpPage/>);

        const buttonSubmit = screen.getByText('Enter');
        expect(buttonSubmit).toBeDisabled();

        const inputUsername = screen.getByLabelText('Please enter your user name (required)');
        fireEvent.change(inputUsername, {
            target: {
                value: 'aaronswartz'
            }
        });

        expect(buttonSubmit).toBeEnabled();
    });

    it('should set a username', () => {
        render(<SignUpPage/>);

        const inputUsername = screen.getByLabelText('Please enter your user name (required)');
        fireEvent.change(inputUsername, {
            target: {
                value: 'aaronswartz'
            }
        });

        const buttonSubmit = screen.getByText('Enter');
        fireEvent.click(buttonSubmit);

        const username = store.getState().username.value;

        expect(username).toBe('aaronswartz')
    })
});