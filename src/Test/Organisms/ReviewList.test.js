import React from 'react';
import { screen, render } from '@testing-library/react';
import ReviewList from '../../Component/Organism/ReviewList';
import ListReducer from '../../Store/Reducer/ListReducer';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MockData from '../MockData';
import { createStore } from 'redux';

describe('ReviewList',()=> {

    test('ReviewList Render',() => {   
        const review=
        {
            "id": "review-3",
            "title": "Fish Curry",
            "comments":"Really Good",
            "rating": "3"
        };  
          render(
            <Provider store={createStore(ListReducer, MockData)}>
          <ReviewList review={review} />
          </Provider>);
          expect(screen.getByText("REVIEWS")).toBeInTheDocument();
       });
  
       test('test ReviewList with snapshot',()=>{
         const review=
            {
                "id": "review-3",
            "title": "Fish Curry",
            "comments":"Really Good",
            "rating": "3"
      };  
        const component= renderer.create(
          <Provider store={createStore(ListReducer, MockData)}><ReviewList review = {review}/> </Provider>).toJSON();
        expect(component).toMatchSnapshot();
       });
  
  })