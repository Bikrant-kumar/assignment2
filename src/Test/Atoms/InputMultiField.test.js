import React from 'react';
import { screen,render } from '@testing-library/react';
import InputMultiField from '../../Component/Atoms/InputMultiField';
import renderer from 'react-test-renderer';

const getCommentValue = jest.fn();

describe(InputMultiField,()=>{

   test('Input Render',() => {
      render(<InputMultiField />);
      expect(screen.getByTestId("checkTextField")).toBeInTheDocument();
   });

   test('test InputMultiField with snapshot',()=>{
      const component= renderer.create(<InputMultiField getValue={getCommentValue}/>).toJSON();
      expect(component).toMatchSnapshot();
   });

})
