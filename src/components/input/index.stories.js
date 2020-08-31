import React from 'react';
import Input from './';

export default {
  title: 'Inputs/ Input',
  component: Input,
};

export const WithoutLabel = () => <Input id='1' name='1' placeholder='Without label' />;

WithoutLabel.story = {
  name: 'Without label',
};

export const WithLabel = () => <Input id='2' label='Label' name='2' />;

WithLabel.story = {
  name: 'With label',
};

export const Disabled = () => <Input id='3' label='Disabled' name='3' disabled />;
export const WithAlert = () => <Input id='4' label='With Alert' name='4' alertText='Required' />;

WithAlert.story = {
  name: 'With alert',
};
