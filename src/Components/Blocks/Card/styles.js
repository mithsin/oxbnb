import { createUseStyles } from 'react-jss'
import { makeStyles } from '@material-ui/core/styles';
import { WrapText } from '@material-ui/icons';

export const CardItemStyle = createUseStyles({
    CardItem: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        margin: '8px',
        padding: '8px'
    },
    img: {
        width: '100%'
    }
});
