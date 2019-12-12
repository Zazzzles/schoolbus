/* eslint no-use-before-define: 0 */
import * as React from 'react'

import {
  StyledInput,
  StyledLabel,
  StyledSpan
} from './styles'

class Checkbox extends React.PureComponent {
  render() {
    const { children, onChange, checked, onBlur, disabled, ...otherProps } = this.props

    return (
      <StyledLabel {...otherProps}>
        <StyledInput 
          onChange={onChange} 
          onBlur={onBlur} 
          checked={checked} 
          disabled={disabled} 
          readOnly
        />
        <StyledSpan 
          disabled={disabled} 
          labelled={children}
        >
          {children}
         </StyledSpan>
      </StyledLabel>
    )
  }
}

export default Checkbox
