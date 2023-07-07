import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLogedIn : false,
    error: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<any>) {
            state.isLogedIn = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isLogedIn = false;
            state.user = null;
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;