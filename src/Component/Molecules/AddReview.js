import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addReview} from '../../Store/Action/ListAction';
import { v4 as uuidv4 } from "uuid";
import Grid from '@material-ui/core/Grid';
import InputMultiField from '../Atoms/InputMultiField';
import Button from '../Atoms/ButtonStyle';
import Rating from '../Atoms/Rating';
import Label from '../Atoms/Label';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    width:"22%",
    marginLeft:"39%",
    paddingLeft:theme.spacing(3),
    paddingBottom:theme.spacing(1.5),
    marginTop: theme.spacing(12),
    textAlign:"center",
    background: 'linear-gradient(60deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    },
}));

function AddReview(props) {
    const [review , setReview] =useState({
        id:uuidv4(),
        title:props.title,
        comments:'',
        rating:''
    }); 
    const dispatch = useDispatch();
    const classes = useStyles();

    const getRatingValue = (value) =>{
        review.rating=value
    }
    const getCommentValue = (value)=>{
        review.comments=value
    }

     const handleAdd = () => {
        dispatch(addReview(review))
        props.handleClose(false)
    }

    return (
            <Grid container className={classes.paper}>
                <Grid ><Label text="Share your experience"/> </Grid>  
                <Box component={Paper}>
                    <h4><Label text={props.title}/></h4>  
                    <InputMultiField getValue={getCommentValue} /> 
                    <Rating getValue={getRatingValue}/>
                    <Button clickData={handleAdd} size={props.size} color={props.color} text={props.text} />
                </Box> 
            </Grid>
    )
}

export default AddReview
