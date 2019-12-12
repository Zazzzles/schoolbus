import React from 'react'
import { connect } from 'formik'
import ReactPhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/dist/style.css'
import './styles.css'

import createDefaultInputProps from '../../utils/create-input-defaults'

import InputWrapper from '../input-wrapper'

const TelInput = props => {
  const {
    formik,
    masks,
    value,
    onBlur,
    onChange,
    placeholder,
    defaultCountry,
    inputProps,
    disabled,
    alertText: alertTextOverride,
    ...otherProps
  } = props

  const { id = otherProps.name, label, name } = otherProps

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
    <InputWrapper disabled={disabled} alertText={alertText} {...otherProps}>
      <ReactPhoneInput
        {...inputDefaults}
        onChange={onChange ? onChange : defaultOnChange}
        value={value || defaultValue || ''}
        defaultCountry={defaultCountry}
        disabled={disabled}
        name={name}
        countryCodeEditable={false}
        masks={masks}
        inputExtraProps={{
          ...inputProps,
          id,
          name,
        }}
        placeholder={placeholder || label}
      />
    </InputWrapper>
  )
}

TelInput.defaultProps = {
  defaultCountry: 'za',
  masks: {
    za: '+.. .. ... ....',
  }
}
export default connect(TelInput)
