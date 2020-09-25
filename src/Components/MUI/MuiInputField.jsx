import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const MuiInputField = ({
  defaultValue,
  value,
  required,
  type,
  name, 
  label,
  inputError,
  onChange,
  onKeyPress
}) => {
      const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: '#fff',
          color: '#000',
          marginBottom: "6px"
        },
      }));
    const classes = useStyles();
    return <TextField
                className={classes.root}
                label={label}
                {...{required: required}}
                type={type? type : 'text'}
                name={name}
                variant="outlined"
                onChange={onChange}
                { ...value && {value: value}}
                { ...inputError && { error: true }}
                { ...defaultValue && {defaultValue: defaultValue}}
                { ...onKeyPress && {onKeyPress: onKeyPress}}
                InputProps={{ classes, disableunderline: "true" }}
              />
};

export default MuiInputField;