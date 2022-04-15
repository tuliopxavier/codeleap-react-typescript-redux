import { render as rtlRender, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Post } from '.';
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
    username: "johndoe",
    created_datetime: "2022-04-04T05:20:39.047029Z",
    title: "My First Post at CodeLeap Network!",
    content: "Curabitur suscipit suscipit tellus."
};

describe('Post item', () => {
    it('should render the posts', () => {
        render(<Post post={post} />);
        expect(screen.getByText('My First Post at CodeLeap Network!')).toBeTruthy();
    });
});