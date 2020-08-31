import React from 'react'
import DateInput from './'
import Flex from '../flex'
import { Formik } from 'formik'

export default {
  title: 'Inputs/ Date Input',
  component: DateInput,
}

export const Basic = () => (
  <Flex flexDirection='column'>
    <DateInput id='1' name='1' label='Default' />
    <DateInput id='1' name='1' label='Disabled' disabled />
  </Flex>
)

export const WithFormik = () => (
  <Formik>
    <DateInput label='With Formik' name='test' />
  </Formik>
)
