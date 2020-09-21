import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    buttonStyle: props => {
      return {
        marginBottom: '10px',
        padding: "15px 0",
        color: props.color,
        backgroundColor: props.bgColor,
        boxShadow: props.boxShadow,
        "&:hover": {
          color: props.hColor,
          backgroundColor: props.hbgColor
        }
      }
    }
});