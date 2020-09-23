import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const headerSlice = createSlice({
    name: 'headerState',
    initialState: {
        messages: [],
        notifications: [],
        currency: 'USA',
    },
    reducers: {
        setHeaderState: (state, action) => {
            return {...state, ...action.payload}
        },
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        setNotifications: (state, action) => {
            state.notifications = action.payload;
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
        },
    },
});
 
export const {
    setHeaderState,
    setMessages,
    setNotifications,
    setCurrency,
} = headerSlice.actions;

export const headerData = state => state.headerState;
export const messages = state => state.headerState.messages;
export const notifications = state => state.headerState.notifications;
export const currency = state => state.headerState.currency;

export default headerSlice.reducer;