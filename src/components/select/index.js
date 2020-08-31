import React from 'react'
import ReactSelect from 'react-select'
import PropTypes from 'prop-types'
import { connect } from 'formik'

import InputWrapper from '../input-wrapper'

import createDefaultInputProps from '../../utils/create-input-defaults'
import inputPropTypes from '../../config/input-prop-types'

import { styleOverride } from './styles' 

const Select = props => {
  const {
    shape,
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
  } = props

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
        styles={styleOverride(props)}
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
  align: 'left',
  singleValueStyles: {}
}

Select.propTypes = {
  ...inputPropTypes,
  align: PropTypes.string,
  singleValueStyles: PropTypes.object,
  containerStyle: PropTypes.object,
  multiple: PropTypes.bool
}

export default connect(Select)
