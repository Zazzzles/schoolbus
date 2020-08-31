import React from 'react'
import InputWrapper from './'

export default {
  title: 'Containers/ Input Wrapper',
  component: InputWrapper,
}

export const Base = (args) => (
  <InputWrapper {...args}>
    Children go here
  </InputWrapper>
)
Base.args = {
  name: 'name',
  label: 'Label',
  alertText: 'This is an alert',
  width: '100%'
}
