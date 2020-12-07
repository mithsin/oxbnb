import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    imgCarouselWrapper: {
        display: 'flex',
        justifyContent: 'center'
    }
});

export const ProjectDetailStyle = createUseStyles({
    Wrapper: props => ({
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        flexBasis: '100%',
    }),
    TitleWrapper: props => ({
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
    }),
    ListWrapper: props => ({
        display: 'flex',
        flexBasis: '100%',
    }),
    ListImgBlock: props => ({
        flex: '1 0 60%',
        // padding: '0 8px',
    }),
    ListInfoBlock: props => ({
        flex: '1 0 40%',
        display: 'flex',
        flexDirection: 'column',
        // padding: '0 8px',
    }),
    ListInfoBlockBtn: props => ({
        marginTop: 'auto'
    }),
    '@media screen and (max-width: 740px)' : {
        ListWrapper: props => ({
            display: 'flex',
            flexDirection: 'column',
        }),
        // ListImgBlock: props => ({
        //     flex: '1 0 100%',
        // }),
        // ListInfoBlock: props => ({
        //     flex: '1 0 100%',
        // }),
    },
});

export const signUpStyles = createUseStyles({
    signUpBodyWrapper: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '100px',
        '@media only screen and (max-width: 769px)': {
            margin: '0 16px',
        }
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
    },
    resendCodeWrapper: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    resendCode: {
        color: '#3f51b5',
        padding: '6px',
        borderRadius: '6px',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#3f51b5'
        }
    },
    errorText: {
        color: '#FF0000',
        padding: '6px'
    }
});

export const homeStyles = createUseStyles({
    landingChildren: {
        display: 'flex',
        flexBasis: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    SectionWrapper: {
        marginBottom: '36px',
        padding: '16px',
    },
    SectionWrapperLessP: {
        marginBottom: '36px',
        padding: '16px 16px 16px 8px',
        '& h2': {
            paddingLeft: '8px',
        }
    },
    CardWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        '@media only screen and (max-width: 960px) and (min-width: 600px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@media only screen and (max-width: 599px)': {
            gridTemplateColumns: 'auto',
        }
    }
});