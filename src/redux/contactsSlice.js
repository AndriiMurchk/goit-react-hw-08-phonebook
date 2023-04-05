import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, editContact, logOut } from "./operations";

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => extraActions.map(action => action[type])
const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: (builder) =>
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            })
            .addCase(editContact.fulfilled, (state, action) => {
                state.items = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    }
                    return item;
                })
            })
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
            })
            .addMatcher(isAnyOf(...getActions('pending')), state => {
                state.isLoading = true;
            })
            .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addMatcher(isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled), state => {
                state.isLoading = false;
                state.error = null;
            })
});

export const contactsReducer = contactsSlice.reducer;