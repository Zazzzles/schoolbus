import React from 'react'
import { connect } from 'formik'
import { Range } from 'rc-slider'

import createDefaultInputProps from '../../utils/create-input-defaults'
import InputWrapper from '../input-wrapper'

import { Container, Value } from './styles'

const RangeInput = ({
  min,
  max,
  value,
  onBlur,
  onChange,
  formik,
  metric,
  alertText: alertTextOverride,
  inputProps,
  disabled,
  ...otherProps
}) => {
  const { name, id = name } = otherProps

  const { alertText, hasFormik, ...inputDefaults } = createDefaultInputProps({
    alertText: alertTextOverride,
    value,
    onBlur,
    onChange,
    name,
    formik,
  })
  const rangeValues = inputDefaults.value || value || [min, max]
  const defaultOnChange = hasFormik ? (value => formik.setFieldValue(name, value)) : onChange

  return (
    <InputWrapper alertText={alertText} {...otherProps}>
      <Container>
        <Value>
          {metric}
          {rangeValues[0]}
        </Value>
        <Range
          {...inputDefaults}
          onChange={defaultOnChange}
          name={name}
          id={id}
          pushable
          value={rangeValues}
          width='70%'
          min={min}
          max={max}
          disabled={disabled}
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

RangeInput.defaultProps = {
  min: 0,
  max: 100,
  onChange: () => {},
  onBlur: () => {}
}

export default connect(RangeInput)
