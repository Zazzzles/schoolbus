import React from 'react'
import { Formik } from 'formik'
import { storiesOf } from '@storybook/react'
import Select from './'
import Flex from '../flex'
import theme from '../../config/theme'

const options = [{ label: 'option 1', value: '1' }, { label: 'option 2', value: '2' }]

const singleValueStyles = {
  fontSize: theme.fontSizes.large,
  color: theme.colors.gray.dark
}

storiesOf('Input/ Select', module)
  .addParameters({ component: Select })
  .add('Empty', () => <Select name="1" placeholder="Empty" />)
  .add('With options', () => <Select value={options[0]} options={options} label="Label" name="2" />)
  .add('Light', () => <Select variant="light" options={options} />)
  .add('Borderless', () => <Select variant="borderless" options={options} />)
  .add('Light + Rounded', () => (
    <Select value={options[0]} shape="rounded" variant="light" hasShadow options={options} />
  ))
  .add('Compact + singleValueStyles', () => (
    <Flex width={120}>
      <Select 
        label="label"
        value={options[0]} 
        variant="compact" 
        options={options} 
        singleValueStyles={singleValueStyles} />
    </Flex>   
  ))
  .add('Disabled', () => <Select disabled options={options} />)
  .add('Align right', () => <Select value={options[0]} align="right" options={options} />)
  .add('Value', () => (
    <Formik
      initialValues={{
        option: options[0],
      }}
    >
      <Select name="option" options={options} />
    </Formik>
  ))
