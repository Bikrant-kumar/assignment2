import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';
import TableData from './TableData';
import Label from '../Atoms/Label';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'Grid',
      gridTemplateRow: 'repeat(12, 1fr)',
      gridGap: theme.spacing(1),
      marginTop: theme.spacing(2),
      width: "90%",
      marginLeft: "5%",
      borderRadius: "10px",
    },
    divider: {
      margin: theme.spacing(0.1),
    },
  }));

export default function TableCard(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; 
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" onClick={handleOpen} >
            <Label text={props.table.Name}/>
          </Typography>  
        </CardContent>
      </CardActionArea>
      <Divider className={classes.divider} />
      <Typography variant="body2" color="textSecondary" component="p" >
          Total Item : {props.table.totalItem}  |  
          Total Cost : {props.table.totalCost}
      </Typography>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          >
          <TableData table={props.table}/>
          </Modal>
    </Card>
  );
}