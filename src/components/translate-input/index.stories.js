import React from 'react'
import { storiesOf } from '@storybook/react'
import TranslateInput from './'
import { Formik } from 'formik'
import * as yup from 'yup'

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

storiesOf('Input | Translate Input', module)
  .addParameters({ component: TranslateInput })
  .add('With Formik', () => (
    <Formik
      validationSchema={schema}
      initialValues={{
        test: [
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
      }}
    >
      {
        <TranslateInput
          label="With Formik"
          name="test"
          languages={[
            {
              value: 'English',
              code: 'en-ZA',
            },
            {
              value: 'Afrikaans',
              code: 'af',
            },
          ]}
        />
      }
    </Formik>
  ))
