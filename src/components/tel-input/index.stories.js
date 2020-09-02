import React from 'react'
import TelInput from './'
import { Formik } from 'formik'
import defaultInputArgs from '../../config/default-input-args'

export default {
  title: 'Inputs/ Tel Input',
  parameters: {
    formik: true,
    component: TelInput,
    docs: {
      description: {
        component: 'An input used for mobile numbers. Includes the ability to select the countrycode from a drop down.'
      }
    }
  },
}

export const Base = (args) => <TelInput {...args}  />
Base.args = defaultInputArgs
