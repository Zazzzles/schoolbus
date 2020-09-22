import React from 'react'
import InputWrapper from './'

export default {
  title: 'Containers & Wrappers/ Input Wrapper',
  component: InputWrapper,
  parameters: {
    docs: {
      description: {
        component:
          'A wrapper made for inputs. Adds a label, sizing, and alert text associated with most inputs on the platform.',
      },
    },
  },
}

export const Base = args => <InputWrapper {...args}>Children go here</InputWrapper>
Base.args = {
  name: 'name',
  label: 'Label',
  alertText: 'This is an alert',
  width: '100%',
}
