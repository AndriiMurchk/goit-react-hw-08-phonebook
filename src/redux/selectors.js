import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.value;

export const selectFilteredContacts = createSelector(selectContacts, selectFilter, (contacts, filter) => {
    const normalisedFilter = filter.trim().toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalisedFilter))
        .sort((firstContact, secondContact) => firstContact.name.localeCompare(secondContact.name));
});

export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectUserName = state => state.user.user.name;
export const selectToken = state => state.user.token;
export const selectIsRefreshing = state => state.user.isRefreshing;
export const selectUserError = state => state.user.error;

export const selectIsAccessDenied = createSelector(selectIsLoggedIn, selectIsRefreshing, (isLoggedIn, isRefreshing) => {
    return !isLoggedIn && !isRefreshing;
}); 