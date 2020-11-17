import { createUseStyles } from 'react-jss'
import { makeStyles } from '@material-ui/core/styles';

export const LandingTopPageStyles = createUseStyles({
    landingWrapper: props => ({
        position: 'relative',
    }),
    topWrapper: props => ({
        top: '0px',
        left: '0px',
        width: 'calc(100% - 32px)',
        height: 'calc(100% - 116px)',
        padding: '100px 16px 16px 16px',
        position: 'absolute',
    }),
});

export const LandingTopPageBgImgStyles = createUseStyles({
    landingWrapper: {
        minHeight: "400px",
        height: "90vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repea",
        backgroundSize: "cover",
        '@media screen and (min-width: 1440px)' : {
            backgroundImage: props=> `url(${props.imgHd})`,
        },
        '@media screen and (min-width: 940px)' : {
            backgroundImage: props=> `url(${props.imgMd})`,
        },
        '@media screen and (min-width: 541px)' : {
            backgroundImage: props=> `url(${props.imgLd})`,
        },
        '@media screen and (max-width: 540px)' : {
            backgroundImage: props=> `url(${props.imgMod})`,
        },
    },
    topWrapper: props => ({
        top: '0px',
        left: '0px',
        width: 'calc(100% - 32px)',
        height: 'calc(100% - 116px)',
        padding: '100px 16px 16px 16px',
        position: 'absolute',
    }),
});