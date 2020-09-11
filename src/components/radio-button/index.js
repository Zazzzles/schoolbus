/* eslint no-use-before-define: 0 */
import * as React from 'react'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

import RadioboxBlank from '@lessondesk/material-icons/dist/RadioboxBlank'
import RadioboxMarked from '@lessondesk/material-icons/dist/RadioboxMarked'

import {
  StyledLabel,
  StyledSpan
} from './styles'

const RadioButton = ({
  children,
  theme,
  onChange,
  checked,
  inputProps,
  labelProps,
  disabled,
  ...otherProps
}) => {
  const Icon = checked ? RadioboxMarked : RadioboxBlank

  return (
    <StyledLabel disabled={disabled} {...otherProps}>
      <Icon
        onClick={onChange}
        checked={checked}
        color={checked ? 'primary' : 'gray.dark'}
        {...inputProps}
      />
      {children && <StyledSpan {...labelProps}>{children}</StyledSpan>}
    </StyledLabel>
  )
}

RadioButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  inputProps: PropTypes.object,
  labelProps: PropTypes.object,
  ...propTypes.typography,
  ...propTypes.layout,
  ...propTypes.space
}

export default RadioButton