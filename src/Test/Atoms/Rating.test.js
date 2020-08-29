import React from 'react';
import { screen,render } from '@testing-library/react';
import Rating from '../../Component/Atoms/Rating';
import renderer from 'react-test-renderer';


describe(Rating ,() => {

   test('Rating check',() => {
      render(<Rating defaultValue={3}/> );
      expect(screen.getByTestId("checkRating")).toBeInTheDocument();
  });

   test('test Rating with snapshot',()=>{
      const component= renderer.create(<Rating defaultValue={4.5}/>).toJSON();
      expect(component).toMatchSnapshot();
   });

})

