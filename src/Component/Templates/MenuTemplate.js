import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ItemList from '../Organism/ItemList';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    position: 'relative',
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
}));

export default function ItemTemplate() {
  const classes = useStyles();
  var manager = false;
  const items  = useSelector(state=>state.item);

  return (
    <Grid>
      <Grid container >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
                 <ItemList items={items} manager={manager}/> 
          </Paper>
        </Grid>    
      </Grid>
    </Grid>
  );
}