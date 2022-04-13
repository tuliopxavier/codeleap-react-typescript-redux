import { render as rtlRender, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Post } from '.';
import { createStore } from 'redux';
import userReducer from '../../actions/userSlice';
import postsReducer from '../../actions/postsSlice';
import { configureStore } from '@reduxjs/toolkit';

const postStore = createStore(() =>
    configureStore({
        reducer: {
            username: userReducer,
            posts: postsReducer
        }
    })
);

const render = (component: ReactElement) => rtlRender(
    <Provider store={postStore}>
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
    it('should render the post', () => {
        render(<Post post={post}/>);
        expect(screen.getByText('My First Post at CodeLeap Network!')).toBeTruthy();
    });
});