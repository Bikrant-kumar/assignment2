import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Label from '../Atoms/Label';
import Rating from '../Atoms/Rating';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'grid',
      gridTemplateRow: 'repeat(12, 1fr)',
      gridGap: theme.spacing(1),
      marginTop: theme.spacing(2),
      width: "43%",
      marginLeft: "5%",
      borderRadius: "10px",
    },
    divider: {
      margin: theme.spacing(0.1),
    },
  }));

export default function ReviewCard(props) {

  const classes = useStyles();
    debugger
  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
            <Label text={props.review.title}/>
          </Typography>  
        <Typography variant="body2" color="textSecondary" component="p">
             {props.review.comments}  
        </Typography>
        </CardContent>
        <Divider className={classes.divider} />
        <Typography variant="body2" component="p">
            <Rating defaultValue={props.review.rating} readOnly="false"/>  
        </Typography>
    </Card>
  );
}