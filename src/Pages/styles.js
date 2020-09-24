import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    imgCarouselWrapper: {
        display: 'flex',
        justifyContent: 'center'
    }
});

export const signUpStyles = createUseStyles({
    signUpBodyWrapper: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '100px',
    },
    signUpInnerWrap: {
        width: '100%',
        maxWidth: '500px',
        minWidth: '250px',
    },
    inputContainer: {
        margin: '16px 0 !important',
        padding: '16px !important',
        border: '1px dotted lightgray !important',
        borderRadius: '6px !important',
    },
    radioContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flex: 1,
    },
    signUpFormWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
});