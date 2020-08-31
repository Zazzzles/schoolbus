import React from 'react';
import LanguageSetField from './';

const defaultLanguage = {
  code: 'en-ZA',
  value: 'English',
};

export default {
  title: 'Inputs/ Language Set Field',
  component: LanguageSetField,
};

export const Default = () => (
  <LanguageSetField language={defaultLanguage} name='test' placeholder='Default' />
);
