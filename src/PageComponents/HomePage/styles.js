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