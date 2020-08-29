import React from 'react';
import { screen, render } from '@testing-library/react';
import TableData from '../../Component/Molecules/TableData';
import ListReducer from '../../Store/Reducer/ListReducer';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MockData from '../MockData';
import { createStore } from 'redux';

describe('TableData',()=> {

    test('TableData Render',() => {
  
      const table={
        "id": "table-2",
        "Name": "Table2",
        "totalItem": 0,
        "totalCost": 0,
        "item": []
      };      
          render(
            <Provider store={createStore(ListReducer, MockData)}>
          <TableData table={table}/>
          </Provider>);
          expect(screen.getByText("Table2")).toBeInTheDocument();
       });
  
       test('test TableData with snapshot',()=>{
         const table={
        "id": "table-2",
        "Name": "Table2",
        "totalItem": 0,
        "totalCost": 0,
        "item": [
            {
                "id": "item-27",
                "Name": "Chenna Poda",
                "Cost": 150,
                "Serving":1,
                "Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAv5Iol4J1UYRJ9sb5mqRV47D-v37ymZXe_A&usqp=CAU"
              }
        ]
      };  
        const component= renderer.create(
          <Provider store={createStore(ListReducer, MockData)}><TableData table = {table}/> </Provider>).toJSON();
        expect(component).toMatchSnapshot();
       });
  
  })
   