import React from 'react'
import { Formik } from 'formik'
import { storiesOf } from '@storybook/react'
import { Select } from '../'

const options = [{ label: 'option 1', value: '1' }, { label: 'option 2', value: '2' }]

storiesOf('Input | Select', module)
  .addParameters({ component: Select })
  .add('Empty', () => <Select name="1" placeholder="Empty" />)
  .add('With options', () => <Select options={options} label="Label" name="2" />)
  .add('White + Bordered', () => <Select variant="light" options={options} />)
  .add('White + Rounded', () => (
    <Select shape="rounded" variant="light" hasShadow options={options} />
  ))
  .add('Disabled', () => <Select disabled options={options} />)
  .add('Value', () => (
    <Formik
      initialValues={{
        option: options[0],
      }}
    >
      <Select name="option" options={options} />
    </Formik>
  ))
