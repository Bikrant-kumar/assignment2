import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { grey } from '@material-ui/core/colors';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Label from '../Atoms/Label';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  displayRight:{
    marginLeft:'32%',
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <AppBar position="static" className={classes.root}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <RestaurantIcon />
          </IconButton>
          <Typography variant="h5" style={{ color: grey[900] }} >
            <Label text={"MY Restaurant"}/> 
          </Typography>
          <Tabs value={value}
              onChange={handleChange}
              textColor="secondary"
              className={classes.displayRight}
              >
                <Tab label="MANAGER" component={Link} to="/"/> 
                <Tab label="MENU" component={Link} to="/Menu"/>
                <Tab label="ORDER" component={Link} to="/Order"/> 
                <Tab label="REVIEW" component={Link} to="/Review"/> 
            </Tabs>
            </Toolbar>
      </AppBar>
  );
}