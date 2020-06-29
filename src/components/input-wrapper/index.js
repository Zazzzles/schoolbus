import React from 'react'
import styled from 'styled-components'
import { layout, space, variant } from 'styled-system'

const StyledLabel = styled.label`
  display: block;
  font-family: inherit;
  color: ${({theme}) => theme.colors.gray.dark};
  font-weight: ${({theme}) => theme.fontWeights.bold};
  font-size: ${({theme}) => theme.fontSizes.xsmall};
  margin-bottom: 0.4em;
`

StyledLabel.displayName = 'InputLabel'

const StyledInputContainer = styled.div`
  min-width: ${({ minWidth }) => minWidth || '300px'};
  width: ${({ width }) => width || '48%'};
  ${({ empty }) => !empty && 'margin-bottom: 1.5em;'}
  position: relative;
  @media (max-width: 990px) {
    width: 100%;
  }
  ${space}
  ${layout}
  ${variant({
    variants: {
      compact: {
        minWidth: 0
      }
    }
  })}
`

StyledInputContainer.displayName = 'InputContainer'

const StyledAlertText = styled.span.attrs({
  role: 'alert',
})`
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${({theme}) => theme.fontSizes.xsmall};
  font-style: italic;
  color: ${({theme}) => theme.colors.red[2]};
  font-weight: ${({theme}) => theme.fontWeights.bold};
`

StyledAlertText.displayName = 'StyledAlertText'

const InputWrapper = ({
  id,
  label,
  children,
  alertText,
  alertStyle,
  containerStyle,
  labelStyle,
  required,
  ...otherProps
}) => (
  <StyledInputContainer empty={!label} style={containerStyle} {...otherProps}>
    {label && (
      <StyledLabel htmlFor={id} required={required} style={labelStyle}>
        {label}
      </StyledLabel>
    )}
    
    {children}
    {alertText && <StyledAlertText style={alertStyle}>{alertText}</StyledAlertText>}
  </StyledInputContainer>
)

export default InputWrapper
