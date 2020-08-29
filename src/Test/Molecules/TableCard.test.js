import React from 'react';
import { screen, render } from '@testing-library/react';
import TableCard from '../../Component/Molecules/TableCard';
import renderer from 'react-test-renderer';

describe('TableCard',()=> {

    test('TableCard Render',() => {
  
      const table={
        "id": "table-2",
        "Name": "Table2",
        "totalItem": 0,
        "totalCost": 0,
        "item": []
      };      
          render(<TableCard table={table}/>);
          expect(screen.getByText("Table2")).toBeInTheDocument();
       });
  
       test('test TableCard with snapshot',()=>{
         const table={
        "id": "table-2",
        "Name": "Table2",
        "totalItem": 0,
        "totalCost": 0,
        "item": []
      };  
        const component= renderer.create(<TableCard table = {table}/>).toJSON();
        expect(component).toMatchSnapshot();
       });
  
  })
   