import React from 'react'
import { storiesOf } from '@storybook/react'
import TelInput from './'
import { Formik } from 'formik'

storiesOf('Input/ Tel Input', module)
  .addParameters({ component: TelInput })
  .add('Basic', () => <TelInput id="1" name="1" label="Default" />)
  .add('With Formik', () => (
    <Formik>
      <TelInput label="With Formik" name="test" />
    </Formik>
  ))
  .add('Disabled', () => (
    <Formik>
      <TelInput name="test" disabled />
    </Formik>
  ))
