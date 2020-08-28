/* eslint no-use-before-define: 0 */
import * as React from 'react'
import { space, layout, typography } from 'styled-system'
import inputPropTypes from '../../config/input-prop-types'
import PropTypes from 'prop-types'

import {
  StyledInput,
  StyledLabel,
  StyledSpan
} from './styles'

class Checkbox extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    ...space.PropTypes,
    ...layout.PropTypes,
    ...typography.PropTypes
  }

  render() {
    const {
      children,
      onChange,
      checked,
      onBlur,
      disabled,
      ...otherProps
    } = this.props

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
