import { fireEvent, render as rtlRender, screen, waitFor } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Post } from '.';
import { setUsername } from '../../actions/userSlice';
import { store } from '../../redux/store';

// // IF NEEDED TO STARTING TESTS WITH A EMPTY REDUX STATES
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

// setting provider
const render = (component: ReactElement) => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
);

const post = {
    id: 0,
    username: "aaronswartz",
    created_datetime: "2022-04-14T05:20:39.047029Z",
    title: "My Second Post at CodeLeap Network!",
    content: "Curabitur suscipit suscipit tellus."
};

describe('Post item', () => {
    it('should render the posts', () => {
        render(<Post post={post} />);
        expect(screen.getByText('My Second Post at CodeLeap Network!')).toBeTruthy();
    });

    test('button availability', () => {
        render(<Post post={post} />);

        let deleteButton = screen.queryByTestId('delete-button');
        let editButton = screen.queryByTestId('edit-button');

        expect(deleteButton).not.toBeInTheDocument();
        expect(editButton).not.toBeInTheDocument();

        // set username to display the post buttons
        store.dispatch(setUsername('aaronswartz'));

        deleteButton = screen.getByTestId('delete-button');
        editButton = screen.getByTestId('edit-button');

        expect(deleteButton).toBeInTheDocument();
        expect(editButton).toBeInTheDocument();
    });

    it('should delete post', () => {
        render(<Post post={post} />);

        const confirmDelete = screen.getByText('Ok');
        fireEvent.click(confirmDelete);

        setTimeout(() => {
            expect(screen.queryByText("My Second Post at CodeLeap Network!")).not.toBeInTheDocument();
        }, 0);
    });
});