import React from 'react';
import { screen, render } from '@testing-library/react';
import AddReview from '../../Component/Molecules/AddReview';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ListReducer from '../../Store/Reducer/ListReducer';
import MockData from '../MockData';
import { createStore } from 'redux';

describe('AddReview',()=> {

  test('AddReview Render',() => {

    const review={
        "id": "review-1",
        "title": "Biryani",
        "comments":"Quality and quantity wise its a perfect biryani brand",
        "rating": "4.5"
    };      
        render(<Provider store={createStore(ListReducer, MockData)}>
          <AddReview review={review}/>
          </Provider>);
        expect(screen.getByText("Share your experience")).toBeInTheDocument();
     });

     test('test AddReview with snapshot',()=>{
      const review={
        "id": "review-1",
        "title": "Biryani",
        "comments":"Quality and quantity wise its a perfect biryani brand",
        "rating": "4.5"
    };
      const component= renderer.create(
        <Provider store={createStore(ListReducer, MockData)}>
        <AddReview review = {review}/></Provider>).toJSON();
      expect(component).toMatchSnapshot();
     });

})
 