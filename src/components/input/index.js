import * as React from 'react'
import { connect } from 'formik'

import StyledInput from '../styled-input'
import InputWrapper from '../input-wrapper'
import theme from '../../config/theme'
import defaultPropTypes from '../../config/input-prop-types'
import createDefaultInputProps from '../../utils/create-input-defaults'

class Input extends React.PureComponent {
  static propTypes = defaultPropTypes

  static defaultProps = {
    label: '',
    inputStyle: {},
    theme
  }

  render() {
    const {
      formik,
      alertText: alertTextOverride,
      disabled,
      value,
      onBlur,
      onChange,
      inputProps,
      ...otherProps
    } = this.props

    const { id = otherProps.name, label, placeholder, inputStyle, name } = otherProps

    const { alertText, ...inputDefaults } = createDefaultInputProps({
      value,
      onBlur,
      onChange,
      name,
      formik,
    })

    return (
      <InputWrapper alertText={alertTextOverride || alertText} {...otherProps}>
        <StyledInput
          id={id}
          {...inputDefaults}
          style={inputStyle}
          aria-label={label}
          aria-required={otherProps.required}
          placeholder={placeholder || label}
          disabled={disabled}
          name={name}
          {...inputProps}
        />
      </InputWrapper>
    )
  }
}

export default connect(Input)
