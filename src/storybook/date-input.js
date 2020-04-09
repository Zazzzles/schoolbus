import React from 'react'
import { storiesOf } from '@storybook/react'
import { DateInput, Flex } from '../'
import { Formik } from 'formik'

storiesOf('Input | Date Input', module)
  .addParameters({ component: DateInput })
  .add('Basic', () => (
    <Flex flexDirection="column">
      <DateInput id="1" name="1" label="Default" />
      <DateInput id="1" name="1" label="Disabled" disabled/>
    </Flex> 
  ))
  .add('With Formik', () => (
    <Formik>
      <DateInput label="With Formik" name="test" />
    </Formik>
  ))
