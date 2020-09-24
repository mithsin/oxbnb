import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from 'States/userSlice';
import headerReducer from 'States/headerSlice';
import listReducer from 'States/listSlice';

export default configureStore({
    reducer: {
        headerState: headerReducer,
        listState: listReducer,
        userState: userReducer,
        middleware: [ ...getDefaultMiddleware({
            serializableCheck: false
        })],
    },
});