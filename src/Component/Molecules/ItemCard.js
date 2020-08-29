import React,{useState} from 'react';
import Label from '../Atoms/Label';
import AddReview from './AddReview';
import { useDispatch } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import {deleteItem} from '../../Store/Action/ListAction';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'grid',
      width:"30%",
      marginTop: theme.spacing(2),
      marginLeft: "2.6%",
      borderRadius: "15px",
    },
    reviewIcon:{
      textAlign:'left'
    },
    deleteIcon:{
      marginTop:theme.spacing(-6),
      float:'right'
    }
  }));
export default function ImgMediaCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; 

  return (
    <Card className={classes.root}>
        <CardContent >
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.item.Photo}
          title={props.item.Name}
          />
          <Typography gutterBottom variant="h5" component="h2" className={classes.reviewIcon}> 
            <Label text={props.item.Name}/>
          </Typography>
          <Typography className={classes.deleteIcon}>
            <IconButton  >
              {props.manager?<DeleteIcon onClick={()=>dispatch(deleteItem(props.item.id))}/>:<RateReviewOutlinedIcon onClick={handleOpen}/>}
            </IconButton>
          </Typography>
          <Typography color="textSecondary" component="p" className={classes.reviewIcon}> 
            ₹{props.item.Cost}
          </Typography>
          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          >
          <AddReview  size="small" text="ADD" title={props.item.Name} handleClose={handleClose}/> 
          </Modal>
        </CardContent>
    </Card>
  );
}