import { createSlice } from "@reduxjs/toolkit";
import { createUser, getUserInfo, logIn, logOut } from "./operations";

const userInitialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    isLoading: true,
};

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    extraReducers: (builder) =>
        builder
            .addCase(createUser.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(logIn.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(logOut.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(logOut.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(getUserInfo.pending, (state) => {
                state.error = null;
                state.isLoading = true;
                state.isRefreshing = true;
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                state.isRefreshing = false;
                state.isLoading = false;
            })
});

export const userReducer = userSlice.reducer;