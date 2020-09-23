import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const headerSlice = createSlice({
    name: 'userState',
    initialState: {
        userName: '',
        eMail: '',
        date: '',
        givingList: [],
        receivingList: [],
        receivingPendingList: [],
        isSignIn: false
    },
    reducers: {
        setLoginInitialState: (state, action) => {
            return {...state, ...action.payload}
        },
        setIsSignInState: (state, action) => {
            state.isSignIn = action.payload;
        },
        setEnterCredentials: (state, action) => {
            state.noCredentials = action.payload;
        },
        setUerName: (state, action) => {
            state.userName = action.payload;
        },
        setReceivingList: (state, action) => {
            state.receivingList = state.receivingList.concat(action.payload);
        },
        setReceivingPendingList: (state, action) => {
            state.receivingPendingList = action.payload
        },
        setUpdateCard: (state, action) => {
            const givingArr = state.givingList.map( item => {
               return ( item.CardId !== action.payload.CardId) 
                ? item 
                : {...item, ...action.payload};
            })
            const receivingArr = state.receivingList.map( item => {
                return ( item.CardId !== action.payload.CardId)
                ? item
                : {...item, ...action.payload};
            })
            return {...state, givingList: givingArr, receivingList: receivingArr}
        },
        setUpdateNewCard: (state, action) => {
            return {
                ...state,
                givingList: [...state.givingList, action.payload]
            }
        },
        setDeleteCardUpdate: (state, action) => {
            state.givingList = action.payload
        }
    },
});
 
export const {
    setEnterCredentials, 
    setIsSignInState,
    setLoginInitialState,
    setUerName,
    setReceivingList,
    setReceivingPendingList,
    setUpdateCard,
    setUpdateNewCard,
    setDeleteCardUpdate
} = headerSlice.actions;

// export const initUserData = () => dispatch() => {

// }

export const updateUserInitState = ( userName, idToken ) => dispatch => {
    axios.get(`https://uwbx85xxs4.execute-api.us-east-1.amazonaws.com/api/user?UserId=${userName}`, {
        headers: { 'Authorization' : idToken }
    })
        .then(res => {
            if(res.data === null){
                dispatch(setUerName(userName))
            } else {
                dispatch(setLoginInitialState({...res.data}));
            }
        })
        .catch(err => console.log(err))
}

// update card info aws /card
export const updateCardInfo = (params) => dispatch => {
    const config = {
        headers: {
            accept: 'application/json',
        },
        data: {},
    };
    // console.log('params==updateCardInfo==============>: ', params)
    axios.put(`https://uwbx85xxs4.execute-api.us-east-1.amazonaws.com/api/card`, params, config)
        .then(res => {
            if(res.data.status === 200){
                dispatch(setUpdateCard(params));
            }
        })
        .catch(err => console.log('api-updatecard-err: ', err))
}

// update card info aws /card
export const createNewCard = (params) => dispatch => {
    const config = {
        headers: {
            accept: 'application/json',
        },
        data: {},
    };
    axios.post(`https://uwbx85xxs4.execute-api.us-east-1.amazonaws.com/api/card`, params, config)
        .then(res => {
            if(res.data.status === 200){
                dispatch(setUpdateNewCard(res.data.newCardData))
            }
        })
        .catch(err => console.log('api-updatecard-err: ', err))
}

// delete a card by id
export const DeleteCard = (params) => (dispatch, getState) => {
    const giverFilterFullList = getState().userState.givingList.filter((card)=> card.CardId !== params.CardId );
    const giverFilterIdList = giverFilterFullList.map(card => card.CardId);
    const newParams = {...params, givingList: giverFilterIdList};
    const config = {
        headers: {
            accept: 'application/json',
        },
        data: {...newParams},
    };
    
    axios.delete(`https://uwbx85xxs4.execute-api.us-east-1.amazonaws.com/api/card`, config)
        .then(res => {
            dispatch(setDeleteCardUpdate(giverFilterFullList))
        })
        .catch(err => console.log('api-updatecard-err: ', err))
}

export const linkUpdateCardUser = (params) => dispatch => {
    axios.put(`https://uwbx85xxs4.execute-api.us-east-1.amazonaws.com/api/card/usercardlink`, params)
        .then(res => {
            if(res.data.status === 200){
                dispatch(setUpdateCard(params));
            }
        })
        .catch(err => console.log('api-updatecard-err: ', err))
    
}
export const cardAdaptAction = (params) => dispatch => {
    const pendingCard = params?.updateReceivingListAction;
    const newParams = {
        CardId: params.CardId,
        UserId: params.UserId,
        receivingList: params.receivingList,
        receivingPendingList: params.receivingPendingList,
        cardSetting: params.cardSetting
    }
    axios.put(`https://uwbx85xxs4.execute-api.us-east-1.amazonaws.com/api/card-adapt`, newParams)
        .then(res => {
            if(res.data.status === 200){
                if(pendingCard){
                    dispatch(setReceivingList(pendingCard))
                };
                dispatch(setReceivingPendingList(newParams.receivingPendingList));
            }
        })
        .catch(err => console.log('api-receivingPendingList-err: ', err))
}


export const userData = state => state.userState;
export const userName = state => state.userState.userName;
export const eMail = state => state.userState.eMail;
export const date = state => state.userState.date;
export const noCredentials = state => state.userState.noCredentials;
export const givingList = state => state.userState.givingList;
export const receivingList = state => state.userState.receivingList;
export const isSignIn = state => state.userState.isSignIn;

export default headerSlice.reducer;