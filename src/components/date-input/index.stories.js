import React from 'react'
import DateInput from './'
import defaultInputArgs from '../../config/default-input-args'

export default {
  title: 'Inputs/ Date Input',
  component: DateInput,
  parameters: {
    formik: {
      initialValues: { 
        name: '' 
      }
    },
    docs: {
      description: {
        component: 'An input used to select a date.'
      }
    }
  }
}

export const Base = (args) => <DateInput {...args} />
Base.args = defaultInputArgs

export const Disabled = () => <DateInput {...defaultInputArgs} disabled />
export const Invalid = () => <DateInput {...defaultInputArgs} alertText='Invalid' />