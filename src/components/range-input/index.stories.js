import React from 'react'
import { storiesOf } from '@storybook/react'
import RangeInput from './'
import { Formik } from 'formik'

storiesOf('Input/ Range Input', module)
  .addParameters({ component: RangeInput })
  .add('Basic', () => <RangeInput label="Price" name="price" metric="R" />)
  .add('With Formik', () => (
    <Formik
      initialValues={{
        price: [0, 0],
      }}
    >
      <RangeInput label="Price" name="price" metric="R" />
    </Formik>
  ))
