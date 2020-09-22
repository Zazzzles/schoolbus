import React from 'react'
import TimeInput from './'
import defaultInputArgs from '../../config/default-input-args'

export default {
  title: 'Inputs/ Time Input',
  component: TimeInput,
  parameters: {
    formik: true,
    docs: {
      description: {
        component: 'An input used to select the time of day.',
      },
    },
  },
}

export const Base = args => <TimeInput {...args} />
Base.args = defaultInputArgs
export const Hour12 = () => <TimeInput {...defaultInputArgs} />
export const Hour24 = () => <TimeInput {...defaultInputArgs} timeFormat="24" />
export const Disabled = () => <TimeInput {...defaultInputArgs} disabled />
export const invalid = () => <TimeInput {...defaultInputArgs} alertText="Invalid" />
