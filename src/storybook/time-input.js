import React from 'react'
import { storiesOf } from '@storybook/react'
import { TimeInput } from '../'
import { Formik } from 'formik'

storiesOf('Input | Time Input', module)
  .addParameters({ component: TimeInput })
  .add('With Formik 12', () => (
    <Formik>
      <TimeInput label="With Formik" />
    </Formik>
  ))
  .add('With Formik 24', () => (
    <Formik>
      <TimeInput timeFormat="24" label="With Formik" />
    </Formik>
  ))
