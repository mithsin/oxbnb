import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const listSlice = createSlice({
    name: 'listState',
    initialState: {
        imageList: [],
        listProfileImg: "", 
        type: [],
        address: {},
        rentDetail: {},
        rate: 0,
        comments: [],
        saleDetail: {},

    },
    reducers: {
        setListState: (state, action) => {
            return {...state, ...action.payload}
        },
        setImageList: (state, action) => {
            state.imageList = action.payload;
        },
        setListProfileImg: (state, action) => {
            state.listProfileImg = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        },
        setRentDetail: (state, action) => {
            state.rentDetail = action.payload;
        },
        setRate: (state, action) => {
            state.rate = action.payload;
        },
        setComments: (state, action) => {
            state.comments = action.payload;
        },
        setSaleDetail: (state, action) => {
            state.saleDetail = action.payload;
        },
    },
});
 
export const {
    setListState,
    setImageList,
    setListProfileImg,
    setType,
    setAddress,
    setRentDetail,
    setRate,
    setComments,
    setSaleDetail,
} = listSlice.actions;

export const headerData = state => state.headerState;
export const messages = state => state.headerState.messages;
export const notifications = state => state.headerState.notifications;
export const currency = state => state.headerState.currency;

export const listListState = state => state.listState;
export const listImageList = state => state.listState.ImageList;
export const listListProfileImg = state => state.listState.ListProfileImg;
export const listType = state => state.listState.Type;
export const listAddress = state => state.listState.Address;
export const listRentDetail = state => state.listState.RentDetail;
export const listRate = state => state.listState.Rate;
export const listComments = state => state.listState.Comments;
export const listSaleDetail = state => state.listState.SaleDetail;

export default listSlice.reducer;