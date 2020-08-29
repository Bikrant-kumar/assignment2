import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields(props) {
  const [value, setValue] = React.useState('Control');
  const classes = useStyles();

  const handleChange = (event) => {
    props.getValue(event.target.value);
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-multiline-flexible"
          label="Comment"
          multiline
          data-testid="checkTextField"
          rowsMax={4}
          value={value}
          onChange={handleChange}
        />
    </form>
  );
}