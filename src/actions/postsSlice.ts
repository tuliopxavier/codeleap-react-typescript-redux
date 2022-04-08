import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PostsState, PostProps, EditPostProps } from '../types/PostTypes';
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
            const filteredPosts = state.value.filter(post => post.id !== action.payload);
            state.value = filteredPosts;
        },
        editPost: (state, action: PayloadAction<EditPostProps>) => {
            const editedPosts = state.value.map((post) => {
                if (post.id === action.payload.id) {
                    post.title = action.payload.title;
                    post.content = action.payload.content;
                }
                return post;
            })
            state.value = editedPosts;
        }
    }
});

export const { setPosts, deletePost, editPost } = postsSlice.actions;

export default postsSlice.reducer;