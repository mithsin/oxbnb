import {createUseStyles} from 'react-jss'

export const signUpStyles = createUseStyles({
    loginBlockWrapper: {
        width: '100%',
        maxWidth: '500px',
        border: '1px dotted gray',
        background: '#ffffffb3',
    },
    loginBlockInnerWrap: {
        margin: '16px',
        display: 'flex',
        flexDirection: 'column'
    },
    signUpFormWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    routeLinkWrapper: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    signUp: {
        color: '#3f51b5',
        padding: '6px',
        borderRadius: '6px',
        border: '3px solid #3f51b5;',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#3f51b5',
            border: '0px',
            padding: '9px',
        }
    }
});