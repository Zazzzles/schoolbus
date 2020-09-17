import React from 'react'
import { connect } from 'formik'

import CalendarToday from '@lessondesk/material-icons/dist/CalendarToday'

import InputWrapper from '../input-wrapper'
import createDefaultInputProps from '../../utils/create-input-defaults'
import { iconStyles, StyledDatePicker } from './styles'

import { colors } from '../../config/theme'

function getDateString(value) {
  return value instanceof Date ? value.toDateString() : value
}

const DateInput = ({
  formik,
  disabled,
  value,
  onBlur,
  onChange,
  placeholder,
  inputProps,
  alertText: alertTextOverride,
  dateFormatter,
  ...otherProps
}) => {

  const { name, id = name, label, inputStyle, required } = otherProps

  const { alertText, ...inputDefaults } = createDefaultInputProps({
    value,
    onBlur,
    onChange,
    name,
    formik,
    alertText: alertTextOverride,
  })
  
  const { hasFormik } = inputDefaults
  const defaultChangeHandler = hasFormik 
    ? value => formik.setFieldValue(name, value)
    : onChange

  return (
    <InputWrapper alertText={alertTextOverride || alertText} {...otherProps}>
      <StyledDatePicker
        {...inputDefaults}
        id={id}
        onChange={defaultChangeHandler}
        value={dateFormatter(value || inputDefaults.value)}
        style={inputStyle}
        aria-label={label}
        aria-required={required}  
        placeholderText={placeholder || label}
        disabled={disabled}
        name={name}
        autoComplete='off'
        {...inputProps}
      />
      <CalendarToday style={iconStyles} color={colors.gray.default} />
    </InputWrapper>
  )
}

DateInput.defaultProps = {
  dateFormatter: getDateString,
  dateFormat: 'dd/MM/yyyy',
  onBlur: () => {},
  onChange: () => {}
}

export default connect(DateInput)
