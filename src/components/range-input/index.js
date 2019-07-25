import React from 'react'
import { connect } from 'formik'
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

import createDefaultInputProps from '../../utils/create-input-defaults'
import InputWrapper from '../input-wrapper'

import { Container, Value } from './styles'

const RangeInput = ({
  min = 0,
  max = 100,
  value,
  onBlur,
  onChange,
  formik,
  placeholder,
  metric,
  onLanguagesChange,
  alertText: alertTextOverride,
  inputProps,
  ...otherProps
}) => {

  const {
    id = otherProps.name,
    label,
    inputStyle,
    name
  } = otherProps

  const { alertText, hasFormik, ...inputDefaults } = createDefaultInputProps({
    alertText: alertTextOverride,
    value,
    onBlur,
    onChange,
    name,
    formik,
  })
  const rangeValues = inputDefaults.value || value || [min, max]
  const defaultOnChange = hasFormik && (value => formik.setFieldValue(name, value))

  return (
    <InputWrapper alertText={alertText} {...otherProps}>
      <Container>
        <Value>
          {metric}
          {rangeValues[0]}
        </Value>
        <Range
          {...inputDefaults}
          onChange={onChange || defaultOnChange}
          name={name}
          id={id}
          pushable
          value={rangeValues}
          width={'70%'}
          min={min}
          max={max}
          {...inputProps}
        />
        <Value>
          {metric}
          {rangeValues[1]}
        </Value>
      </Container>
    </InputWrapper>
  )
}

export default connect(RangeInput)
