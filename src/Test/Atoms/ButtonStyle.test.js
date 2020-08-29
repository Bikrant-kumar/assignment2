import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import Button from '../../Component/Atoms/ButtonStyle';
import renderer from 'react-test-renderer';

const clickData = jest.fn();

describe(Button ,() => {

  test('Button click',() => {
    render(<Button 
    clickData={clickData}
    text='submit'
    />);
   fireEvent.click(screen.getAllByRole('button')[0]);
   expect(clickData).toHaveBeenCalledTimes(1);
 })

 test('test Button with snapshot',()=>{
  const component= renderer.create(<Button clickData={clickData}
    text='submit'/>).toJSON();
  expect(component).toMatchSnapshot();
 })

})
