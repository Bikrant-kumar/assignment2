import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import AddItem from '../Atoms/AddItem';
import Collapse from '@material-ui/core/Collapse';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import {deleteRow,deleteAllItem,addRow} from '../../Store/Action/ListAction';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Label from '../Atoms/Label';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: "8%",
    marginRight: "8%",
    marginTop: theme.spacing(12),
    background: 'linear-gradient(60deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
  CAlign:{
    textAlign:"center"
  }
}));

function TableData({table}) {
  const [open, setOpen] = useState(false);
  const [menu,setMenu] = useState([]);
  const dispatch = useDispatch();
  const items  = useSelector(state=>state.item);
  const getMenuName = (value)=>{
    setMenu(value);
    }
  const classes = useStyles();

  return (
          <Grid className={classes.paper}>
            <Grid className={classes.CAlign}> <Label text={table.Name} /></Grid>     
            <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
            <TableCell > 
              <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => setOpen(!open)}> 
                {open ? <RemoveCircleOutlineIcon/> : <AddCircleOutlineOutlinedIcon/>}
              </IconButton>
              </TableCell>
              <TableCell>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <AddItem getMenu={getMenuName} name="Menu" Details={items}/>
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=> dispatch(addRow(table,menu)) && setOpen(!open)}> 
                  <SendIcon/> 
                </IconButton>
              </Collapse>
              </TableCell>
            <TableCell align="right">S No.</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.item.map((row,index) => (
            <TableRow key={index} >
              <TableCell  >
              <IconButton color="primary" onClick={()=>dispatch(deleteRow(table,row.id,row.Cost)) && setMenu([])}> 
              <DeleteIcon />
              </IconButton>
                </TableCell>
                <TableCell></TableCell>
               <TableCell align="right">{index+1}</TableCell> 
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.Serving}</TableCell>
              <TableCell align="right">{row.Cost}</TableCell>
            </TableRow>
          ))}
          <TableRow>
              <TableCell > 
              {open ? <Button variant="contained" disabled >
                  Check Out
                </Button>:
                <Button color="primary" variant="outlined" onClick={()=>dispatch(deleteAllItem(table)) && setMenu([])} >
                  Check Out
                </Button>}
              </TableCell>
              <TableCell > </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"> Total </TableCell> 
              <TableCell align="right">{table.totalCost}</TableCell>
          </TableRow>
           </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    )
}

export default TableData