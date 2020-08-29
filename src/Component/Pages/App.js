import React,{ useEffect } from 'react';
import '../../App.css';
import AppBar from '../Molecules/AppBar';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ItemTemplate from '../Templates/ItemTemplate';
import MenuTemplate from '../Templates/MenuTemplate';
import OrderTemplate from '../Templates/OrderTemplate';
import ReviewTemplate from '../Templates/ReviewTemplate';
import { getState } from '../../Store/Action/ListAction';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    float:'right',
    marginRight:theme.spacing(.5),
    marginTop:theme.spacing(-6),
  },
  space:{
    margin:theme.spacing(1),
    textDecoration: 'none'
  }

}));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/profile`)
    .then(res => res.json())
    .then(
      data => dispatch(getState(data)),
      err => dispatch({ type: 'FAILURE', err })
    );
    }, []);

  return (
    <div className="App">  
        <BrowserRouter>
          <AppBar/> 
          <Switch>
            <Route exact path='/' component={ItemTemplate }/>
            <Route exact path='/Menu' component={MenuTemplate}/>
            <Route exact path='/Order' component={OrderTemplate}/>
            <Route exact path='/Review' component={ReviewTemplate}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
