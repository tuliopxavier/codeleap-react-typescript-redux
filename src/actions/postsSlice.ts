import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PostsState } from '../types/PostTypes';
import { PostProps } from '../types/PostTypes';
import { fakeData } from '../../fakeData';

const initialState: PostsState = {
    value: fakeData,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<PostProps>) => {
            state.value.push(action.payload);
        },
        deletePost: (state, action: PayloadAction<number>) => {           
            const filteredPosts = state.value.filter(post => post.id !== action.payload)
            state.value = filteredPosts;
        }
    }
});

export const { setPosts, deletePost } = postsSlice.actions;

export default postsSlice.reducer;