import { createUseStyles } from 'react-jss'
import { makeStyles } from '@material-ui/core/styles';
import { WrapText } from '@material-ui/icons';

export const CardItemStyle = createUseStyles({
    CardItem: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        margin: '0px',
        padding: '8px'
    },
    CardImgWrapper: {
        height: '70%',
    },
    img: {
        width: '100%'
    },
    CardBtnWrapper: {
        margin: '8px 0',
    },
});
