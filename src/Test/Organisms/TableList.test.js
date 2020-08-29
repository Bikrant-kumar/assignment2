import React from 'react';
import { screen, render } from '@testing-library/react';
import TableList from '../../Component/Organism/TableList';
import ListReducer from '../../Store/Reducer/ListReducer';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MockData from '../MockData';
import { createStore } from 'redux';

describe('TableList',()=> {

    test('TableList Render',() => {   
        const tables= [
            {
              "id": "table-1",
              "Name": "Table1",
              "totalItem": 0,
              "totalCost": 0,
              "item": []
            },
            {
              "id": "table-2",
              "Name": "Table2",
              "totalItem": 0,
              "totalCost": 0,
              "item": []
            }] 
          render(
            <Provider store={createStore(ListReducer, MockData)}>
          <TableList tables={tables} />
          </Provider>);
          expect(screen.getByText("TABLE")).toBeInTheDocument();
       });
  
       test('test TableList with snapshot',()=>{
         const tables= [
                    {
                      "id": "table-1",
                      "Name": "Table1",
                      "totalItem": 0,
                      "totalCost": 0,
                      "item": []
                    },
                    {
                      "id": "table-2",
                      "Name": "Table2",
                      "totalItem": 0,
                      "totalCost": 0,
                      "item": []
                    }]
        const component= renderer.create(
          <Provider store={createStore(ListReducer, MockData)}><TableList tables={tables}/> </Provider>).toJSON();
        expect(component).toMatchSnapshot();
       });
  
  })