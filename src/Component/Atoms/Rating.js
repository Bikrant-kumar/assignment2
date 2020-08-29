import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function HalfRating(props) {
  const classes = useStyles();
  function handleInputChange(event) {
    props.getValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <Rating name="half-rating-read" size="large" defaultValue={props.defaultValue || ""} precision={0.5} readOnly={props.readOnly} 
      onChange={handleInputChange}
      data-testid="checkRating"
      />
    </div>
  );
}
