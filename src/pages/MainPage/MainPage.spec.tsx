import { fireEvent, render as rtlRender, screen, waitFor } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MainPage } from '.';
import { store } from '../../redux/store';

// IF NEEDED TO STARTING TESTS WITH A EMPTY STATE
// import { createStore } from 'redux';
// import userReducer from '../../actions/userSlice';
// import postsReducer from '../../actions/postsSlice';
// import { configureStore } from '@reduxjs/toolkit';

// const store = createStore(() =>
//     configureStore({
//         reducer: {
//             username: userReducer,
//             posts: postsReducer
//         }
//     })
// );

const render = (component: ReactElement) => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
);

describe('Main page', () => {
    it('should render the page', async () => {
        render(<MainPage/>);
        expect(screen.getByText('CodeLeap Network')).toBeInTheDocument();

        const posts = await screen.findAllByTestId('post-item');
        expect(posts).toHaveLength(10);
    });

    it('should be able to create a new post', async () => {
        render(<MainPage/>);

        const posts = await screen.findAllByTestId('post-item');
        expect(posts).toHaveLength(10);

        const buttonSubmit = screen.getByText('Create');
        expect(buttonSubmit).toBeDisabled();

        const titleInput = screen.getByLabelText('Title (required)');
        const contentInput = screen.getByLabelText('Content (required)');

        fireEvent.change(titleInput, {
            target: {
                value: 'Testing the title input'
            }
        });
        fireEvent.change(contentInput, {
            target: {
                value: 'Testing the content input'
            }
        });

        expect(buttonSubmit).toBeEnabled();
        fireEvent.click(buttonSubmit);

        const updatedPosts = await screen.findAllByTestId('post-item');
        expect(updatedPosts).toHaveLength(11);
        
        await waitFor(() => {
            expect(screen.getAllByText('Testing the title input')).toBeTruthy();
            expect(screen.getAllByText('Testing the content input')).toBeTruthy();
        });
    });
});