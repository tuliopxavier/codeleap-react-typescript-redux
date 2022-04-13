import { render as rtlRender, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MainPage } from '.';
import { createStore } from 'redux';
import userReducer from '../../actions/userSlice';
import postsReducer from '../../actions/postsSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = createStore(() =>
    configureStore({
        reducer: {
            username: userReducer,
            posts: postsReducer
        }
    })
);

const render = (component: ReactElement) => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
);

describe('Main page', () => {
    it('should render the page', () => {
        render(<MainPage/>);
        expect(screen.getByText('CodeLeap Network')).toBeTruthy();
    });

    // it('should be able to create a new post', () => {
    //     render(<MainPage/>);

    //     const titleInput = screen.getByPlaceholderText('Hello World');
    //     const contentInput = screen.getByPlaceholderText('Content here');
    //     userEvent.type(titleInput, 'Testing the title input');
    //     userEvent.type(contentInput, 'Testing the content input');
        
    //     const buttonSubmit = screen.getByText('Create');
    //     userEvent.click(buttonSubmit);
          
    //     expect(screen.getByText('Testing the title input')).toBeInTheDocument();
    //     expect(screen.getByText('Testing the content input')).toBeInTheDocument();
    // });
});