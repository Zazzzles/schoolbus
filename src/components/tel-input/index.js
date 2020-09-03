import React from 'react'
import { connect } from 'formik'
import PropTypes from 'prop-types'
import ReactPhoneInput from 'react-phone-input-2'
import inputPropTypes from '../../config/input-prop-types'

import 'react-phone-input-2/lib/style.css'
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

  const { name, id = name, label } = otherProps

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
        preferredCountries={['za']}
        onChange={onChange ? onChange : defaultOnChange}
        value={value || defaultValue || ''}
        country={defaultCountry}
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
    za: '.. ... ....',
  }
}

TelInput.propTypes = {
  ...inputPropTypes,
  defaultCountry: PropTypes.string,
}

export default connect(TelInput)
