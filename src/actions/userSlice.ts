import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsernameState {
    value: string
}

const initialState: UsernameState = {
    value: '',
};

export const userSlice = createSlice({
    name: 'username',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;