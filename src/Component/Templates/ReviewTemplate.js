import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import ReviewList from '../Organism/ReviewList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      marginLeft:'25%',
      marginRight:'25%',
      marginTop: theme.spacing(2),
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      position: 'relative',
    },
  }));

function ReviewTemplate() {
    const classes = useStyles();
    const reviews = useSelector(state=>state.reviews);
    return (
        <Grid container >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
                <ReviewList reviews ={reviews}/>
           </Paper>
        </Grid>    
      </Grid>
    )
}

export default ReviewTemplate

