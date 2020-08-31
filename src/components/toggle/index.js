import * as React from 'react'
import PropTypes from 'prop-types'
import { space, layout } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import {
  ToggleContainer,
  ToggleInput,
  ToggleLabel
} from './styles'

class Toggle extends React.PureComponent {
  static defaultProps = {
    checked: false,
    inputStyle: {},
  }

  static propTypes = {
    checked: PropTypes.bool,
    ...propTypes.layout,
    ...propTypes.space,
  }

  render() {
    const { id, onBlur, onChange, inputStyle, checked, ...otherProps } = this.props

    return (
      <ToggleContainer {...otherProps}>
        <ToggleInput
          style={inputStyle}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          id={id}
          type='checkbox'
          readOnly
        />
        <ToggleLabel htmlFor={this.props.id} />
      </ToggleContainer>
    )
  }
}

export default Toggle
