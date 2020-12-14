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
        maxWidth: '1440px',
    }),
    TitleWrapper: props => ({
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        textAlign: 'center',
    }),
    ListWrapper: props => ({
        display: 'flex',
        flexBasis: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    }),
    ListImgBlock: {
        flex: '1',
        maxWidth: '1240px',
        // maxWidth: '500px',
        padding: '0px',
        display: 'flex',
        '@media only screen and (max-width: 960px) and (min-width: 600px)': {
            padding: '10px',
            flexDirection: 'column',
        },
        '@media only screen and (max-width: 599px)': {
            padding: '10px',
            flexDirection: 'column',
        }
    },
    ListLgImgBlock: {
        height: '400px',
        width: '60%',
        '@media only screen and (max-width: 960px) and (min-width: 600px)': {
            width: '100%',
        },
        '@media only screen and (max-width: 599px)': {
            width: '100%',
        }
    },
    ListListImgBlock: {
        display: 'grid',
        width: '40%',
        marginLeft: '24px',
        gridTemplateColumns: 'repeat(3, 1fr)',
        columnGap: '6px',
        rowGap: '6px',
        maxHeight: '400px',
        overflow: 'auto',
        '& img': {
            width: '100%',
        },
        '@media only screen and (max-width: 960px) and (min-width: 600px)': {
            width: '100%',
            marginLeft: '0px',
            margin: "16px 0px",
            maxHeight: '300px',
        },
        '@media only screen and (max-width: 599px)': {
            width: '100%',
            marginLeft: '0px',
            margin: "16px 0px",
            maxHeight: '200px',
        }
    },
    ListInfoBlock: props => ({
        flex: '1',
        maxWidth: '1240px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    }),
    ListInfoBlockDetail: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '16px 0',
        textAlign: 'center',
    },
    ListInfoBlockBtn: props => ({
        marginTop: 'auto'
    }),
    '@media screen and (max-width: 740px)' : {
        ListWrapper: props => ({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }),
        ListImgBlock: props => ({
            flex: '1 0 60%',
            maxWidth: '100%',
            padding: '0 8px',
        }),
        ListInfoBlock: props => ({
            flex: '1 0 40%',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
        }),
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