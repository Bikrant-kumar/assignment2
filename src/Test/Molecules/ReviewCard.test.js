import React from 'react';
import { screen, render } from '@testing-library/react';
import ReviewCard from '../../Component/Molecules/ReviewCard';
import renderer from 'react-test-renderer';

describe('ReviewCard',()=> {

    test('ReviewCard Render',() => {
  
      const review={
          "id": "review-1",
          "title": "Biryani",
          "comments":"Quality and quantity wise its a perfect biryani brand",
          "rating": "4.5"
      };      
          render(<ReviewCard review={review}/>);
          expect(screen.getByText("Biryani")).toBeInTheDocument();
       });
  
       test('test ReviewCard with snapshot',()=>{
        const review={
          "id": "review-1",
          "title": "Biryani",
          "comments":"Quality and quantity wise its a perfect biryani brand",
          "rating": "4.5"
      };
        const component= renderer.create(<ReviewCard review = {review}/>).toJSON();
        expect(component).toMatchSnapshot();
       });
  
  })
   