import React from 'react';
import { screen,render } from '@testing-library/react';
import Label from '../../Component/Atoms/Label'
import renderer from 'react-test-renderer';

describe(Label ,() => {

   test('Label check',() => {
      render(<Label text='Name' />);
     expect(screen.getByText("Name")).toBeInTheDocument();
  });

   test('test Label with snapshot',()=>{
      const component= renderer.create(<Label text='Name'/>).toJSON();
      expect(component).toMatchSnapshot();
   });

})