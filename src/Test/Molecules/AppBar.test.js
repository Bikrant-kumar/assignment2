import React from 'react';
import { screen,render } from '@testing-library/react';
import AppBar from '../../Component/Molecules/AppBar';
import renderer from 'react-test-renderer';

describe(AppBar ,() => {

   test('AppBar Render',() => {
      render(<AppBar /> );
      expect(screen.getByText(/MY Restaurant/)).toBeInTheDocument();
  });

   test('test AppBar with snapshot',()=>{
      const component= renderer.create(<AppBar/>).toJSON();
      expect(component).toMatchSnapshot();
   });

})


