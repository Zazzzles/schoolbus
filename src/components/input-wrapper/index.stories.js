import React from 'react';
import InputWrapper from './';

export default {
  title: 'Inputs/ Wrapper',
  component: InputWrapper,
};

export const Default = () => (
  <InputWrapper id='id' label='Test label' alertText='Test error text' required>
    Children go here
  </InputWrapper>
);
