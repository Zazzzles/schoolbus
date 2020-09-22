import React from 'react'
import RangeInput from './'
import defaultInputArgs from '../../config/default-input-args'

export default {
  title: 'Inputs/ Range Input',
  component: RangeInput,
  parameters: {
    formik: {
      initialValues: { name: [12, 30] },
    },
    docs: {
      description: {
        component: 'An input used to select a two limits that define a range.',
      },
    },
  },
}
const defaultArgs = {
  ...defaultInputArgs,
  metric: 'R',
}

export const Base = args => <RangeInput {...args} />
Base.args = defaultArgs

export const Disabled = () => <RangeInput {...defaultArgs} disabled />
export const Invalid = () => <RangeInput {...defaultArgs} alertText="Invalid" />
