/* eslint no-use-before-define: 0 */
import * as React from 'react'
import styled from 'styled-components'

import RadioboxBlank from '@lessondesk/material-icons/dist/RadioboxBlank'
import RadioboxMarked from '@lessondesk/material-icons/dist/RadioboxMarked'

import theme from '../../config/theme'

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: ${({theme}) => theme.fonts.Montserrat};
  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semi};
  line-height: ${({theme}) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray.dark};
`

const StyledSpan = styled.span`
  margin-left: 0.5em;
`

class RadioButton extends React.PureComponent {
  static defaultProps = {
    theme,
  }

  render() {
    const {
      children,
      theme,
      onChange,
      checked,
      inputProps,
      labelProps,
      disabled,
      ...otherProps
    } = this.props

    const Icon = checked ? RadioboxMarked : RadioboxBlank

    return (
      <StyledLabel disabled={disabled} {...otherProps}>
        <Icon
          onClick={onChange}
          checked={checked}
          color={checked ? theme.colors.primary : theme.colors.gray.dark}
          {...inputProps}
        />
        {children && <StyledSpan {...labelProps}>{children}</StyledSpan>}
      </StyledLabel>
    )
  }
}

export default RadioButton
