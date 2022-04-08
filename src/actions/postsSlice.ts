import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostProps } from '../types/PostTypes';
import { fakeData } from '../../fakeData';

interface PostsState {
    value: PostProps[];
}

const initialState: PostsState = {
    value: fakeData,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<PostProps>) => {
            state.value.push(action.payload);
        }
    }
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;