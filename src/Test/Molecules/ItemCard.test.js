import React from 'react';
import { screen, render } from '@testing-library/react';
import ItemCard from '../../Component/Molecules/ItemCard';
import ListReducer from '../../Store/Reducer/ListReducer';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MockData from '../MockData';
import { createStore } from 'redux';

describe('ItemCard',()=> {

  test('ItemCard Render',() => {

    const item=    {
        "id": "item-30",
        "Name": "Sarson Da Saag",
        "Cost": 100,
        "Serving":1,
        "Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZdsgv_wC5-CzghxHJuRbluRRVbkHuvHDrrA&usqp=CAU"
      };     
        render(
          <Provider store={createStore(ListReducer, MockData)}>
        <ItemCard item={item} size="small" color="primary" text="Delete"  manager="false"/>
        </Provider>);
        expect(screen.getByText("Sarson Da Saag")).toBeInTheDocument();
     })

     test('test ItemCard with snapshot',()=>{
      const item=    {
        "id": "item-30",
        "Name": "Sarson Da Saag",
        "Cost": 100,
        "Serving":1,
        "Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZdsgv_wC5-CzghxHJuRbluRRVbkHuvHDrrA&usqp=CAU"
      };
      const component= renderer.create(
        <Provider store={createStore(ListReducer, MockData)}>
      <ItemCard item={item} size="small" color="primary" text="Delete"  manager="true"/>
      </Provider>).toJSON();
      expect(component).toMatchSnapshot();
     })

})
 