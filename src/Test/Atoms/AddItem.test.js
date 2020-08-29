import React from 'react';
import { screen, render } from '@testing-library/react';
import AddItem from '../../Component/Atoms/AddItem';
import renderer from 'react-test-renderer';

const getMenuName = jest.fn();
describe('AddItem',()=> {

  test('AddItem Render',() => {

    const items={
        "id": "item-6",
        "Name": "Rogan Josh",
        "Cost": 200,
        "Serving":1,
        "Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7sHfzCTWnySRWzoYDL7xlkaQIfkMYoFOnww&usqp=CAU"
      };
      
        render(<AddItem getMenu={getMenuName} name="Menu" Details={items}
        />);
        expect(screen.getByTestId("checkAutocomplete")).toBeInTheDocument();
     })

     test('test AddItem with snapshot',()=>{
      const items={
        "id": "item-6",
        "Name": "Rogan Josh",
        "Cost": 200,
        "Serving":1,
        "Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7sHfzCTWnySRWzoYDL7xlkaQIfkMYoFOnww&usqp=CAU"
      };
      const component= renderer.create(<AddItem getMenu={getMenuName} name="Menu" Details={items}/>).toJSON();
      expect(component).toMatchSnapshot();
     })

})
 