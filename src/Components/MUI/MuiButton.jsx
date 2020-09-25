import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';


const MuiButton = ({props, label, onClick, onKeyPress, variant, disabled}) => {
    const classes = useStyles(props);
    return <Button 
                variant={ variant ? "contained" : variant} 
                className={classes.buttonStyle} 
                onClick={ onClick }
                { ...disabled && {disabled: disabled}}
                { ...onKeyPress && {onKeyPress: onKeyPress}}
                >
              {label}
           </Button>;
};

export default MuiButton;