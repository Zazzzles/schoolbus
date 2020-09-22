import React from 'react'
import TranslateInput from './'
import * as yup from 'yup'
import defaultInputArgs from '../../config/default-input-args'

const schema = yup.object().shape({
  test: yup.array().of(
    yup.object().shape({
      value: yup
        .string()
        .trim()
        .min(2)
        .max(80)
        .required(),
    })
  ),
})

const initialValues = {
  name: [
    {
      value: '',
      locale: 'en-ZA',
      default: true,
    },
    {
      value: '',
      locale: 'af',
    },
  ],
}

const languages = [
  {
    value: 'English',
    code: 'en-ZA',
  },
  {
    value: 'Afrikaans',
    code: 'af',
  },
]

export default {
  title: 'Inputs/ Translate Input',
  component: TranslateInput,
  parameters: {
    formik: {
      schema,
      initialValues,
    },
    docs: {
      description: {
        component:
          'The TranslateInput component represents an input containing translations for each language. These languages can be specified using the `languages` property.',
      },
    },
  },
}

export const Base = args => <TranslateInput {...args} />
Base.args = {
  ...defaultInputArgs,
  languages,
}
