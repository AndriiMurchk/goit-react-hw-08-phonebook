import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const header = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    clear() {
        axios.defaults.headers.common.Authorization = '';
    }
};

// ---------------- USER -----------------

export const createUser = createAsyncThunk("user/createUser",
    async (userData, thunkAPI) => {
        try {
            console.log(userData);
            const { data } = await axios.post("/users/signup", userData);
            header.set(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk("user/logIn",
    async (userData, thunkAPI) => {
        try {
            const {data} = await axios.post("/users/login", userData);
            header.set(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk("user/logOut",
    async (_, thunkAPI) => {
        try {
            const {data} = await axios.post("/users/logout"); //нужен токен
            header.clear();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getUserInfo = createAsyncThunk("user/getUserInfo",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const savedToken = state.user.token;
        if (!savedToken) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        };
        header.set(savedToken);
        try {
            const { data } = await axios.get("/users/current"); //нужен токен
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


// ---------------- CONTACTS -----------------

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const {data} = await axios.get("/contacts"); //нужен токен
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk("contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const {data} = await axios.post("/contacts", contact);  //нужен токен
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const {data} = await axios.delete(`/contacts/${contactId}`);  //нужен токен
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const editContact = createAsyncThunk("contacts/editContact",
    async ({editedData, id}, thunkAPI) => {
        try {
            const { data } = await axios.patch(`/contacts/${id}`, editedData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);