import React from 'react';
import ExpandingSearchInput from './';

const handleExpand = state => console.log(state);

export default {
  title: 'Inputs/ Expanding Search Input',
  component: ExpandingSearchInput,
};

export const Default = () => <ExpandingSearchInput label='Default' onExpand={handleExpand} />;
