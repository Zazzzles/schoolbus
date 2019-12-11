import React from 'react'
import ReactSelect from 'react-select'
import { connect } from 'formik'

import InputWrapper from '../input-wrapper'

import createDefaultInputProps from '../../utils/create-input-defaults'

import { styleOverride } from './styles' 


const Select = ({
  shape,
  variant,
  hasShadow,
  disabled,
  disableEmpty,
  options,
  formik,
  value,
  onBlur,
  onChange,
  placeholder,
  fontSize,
  multiple,
  alertText: alertTextOverride,
  name,
  ...otherProps
}) => {
  const { alertText, hasFormik, ...inputDefaults } = createDefaultInputProps({
    alertText: alertTextOverride,
    value,
    onBlur,
    onChange,
    name,
    formik,
  })

  const defaultOnChange = hasFormik && (value => formik.setFieldValue(name, value))
  const defaultValue = hasFormik && formik.values[name]

  return (
    <InputWrapper alertText={alertText} {...otherProps}>
      <ReactSelect
        {...inputDefaults}
        {...otherProps}
        onChange={onChange || defaultOnChange}
        value={value || defaultValue}
        placeholder={placeholder}
        styles={styleOverride({ shape, variant, fontSize, hasShadow })}
        name={name}
        options={options}
        isDisabled={disableEmpty ? disabled || options.length === 0 : disabled}
        isMulti={multiple}
      />
    </InputWrapper>
  )
}

Select.defaultProps = {
  containerStyle: {},
}

export default connect(Select)
