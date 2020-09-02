import React from 'react'
import ExpandingSearchInput from './'

export default {
  title: 'Inputs/ Expanding Search Input',
  component: ExpandingSearchInput,
}

export const Base = (args) => <ExpandingSearchInput {...args} />
Base.args = {
  placeholder: 'Search...',
  disabled: false,
  onExpand: console.log,
  onChange: console.log
}
