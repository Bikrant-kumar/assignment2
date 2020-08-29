import React from 'react';
import { screen, render } from '@testing-library/react';
import ItemList from '../../Component/Organism/ItemList';
import ListReducer from '../../Store/Reducer/ListReducer';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MockData from '../MockData';
import { createStore } from 'redux';

describe('ItemList',()=> {

    test('ItemList Render',() => {   
        const item=
        {
            "id": "item-27",
            "Name": "Chenna Poda",
            "Cost": 150,
            "Serving":1,
            "Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAv5Iol4J1UYRJ9sb5mqRV47D-v37ymZXe_A&usqp=CAU"
  };   
          render(
            <Provider store={createStore(ListReducer, MockData)}>
          <ItemList item={item} manager="true"/>
          </Provider>);
          expect(screen.getByText("MENU")).toBeInTheDocument();
       });
  
       test('test ItemList with snapshot',()=>{
         const item=
            {
                "id": "item-27",
                "Name": "Chenna Poda",
                "Cost": 150,
                "Serving":1,
                "Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAv5Iol4J1UYRJ9sb5mqRV47D-v37ymZXe_A&usqp=CAU"
      };  
        const component= renderer.create(
          <Provider store={createStore(ListReducer, MockData)}><ItemList item = {item} manager="true"/> </Provider>).toJSON();
        expect(component).toMatchSnapshot();
       });
  
  })
   