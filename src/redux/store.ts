import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../actions/userSlice';
import postsReducer from '../actions/postsSlice'

export const store = configureStore({
    reducer: {
        username: userReducer,
        posts: postsReducer
    } 
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 