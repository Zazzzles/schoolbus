import React from 'react'
import { storiesOf } from '@storybook/react'
import InputWrapper from './'

storiesOf('Input | Wrapper', module)
  .addParameters({ component: InputWrapper })
  .add('Default', () => (
    <InputWrapper 
      id='id'
      label='Test label'
      alertText='Test error text'
      required
    >
      Children go here
    </InputWrapper>
  ))
