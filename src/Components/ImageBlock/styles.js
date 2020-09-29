import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    carouselWrapper: {
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
    },
    imageBlock: {
        width: '80%',
        maxWidth: '1200px',
        height: '60vh',
        margin: 'auto',
        '@media only screen and (max-width: 769px)': {
            width: '100%'
        }
    },
    prevBtn: {
        position: 'absolute',
        top: '50%',
        left: '50px',
        backgroundColor: '#ffffffa1'
    },
    nextBtn: {
        position: 'absolute',
        top: '50%',
        right: '50px',
        backgroundColor: '#ffffffa1'
    },
    
})