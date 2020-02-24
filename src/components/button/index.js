import * as React from 'react'
import PropTypes from 'prop-types'

import { typography, layout, space } from 'styled-system'
import theme from '../../config/theme'
import Spinner from '../spinner'

import { StyledButton, SHAPES, SIZES } from './styles'

class Button extends React.PureComponent {
  static SHAPES = SHAPES
  static SIZES = SIZES

  static propTypes = {
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    shape: PropTypes.oneOf(Object.keys(SHAPES)),
    size: PropTypes.oneOf(Object.keys(SIZES)),
    ...space.propTypes,
    ...layout.propTypes,
    ...typography.propTypes,
  }

  static defaultProps = {
    onClick: () => {},
    shape: this.SHAPES.square,
    size: this.SIZES.default,
    theme,
  }

  render() {
    const { isLoading = false, spinnerProps, variant } = this.props

    return (
      <StyledButton
        {...this.props}
        variant={isLoading ? 'secondary' : variant}
        disabled={isLoading}
      >
        {isLoading
          ? <Spinner
              color='white'
              size='20px'
              width='3px'
              {...spinnerProps}
            />
          : this.props.children}
      </StyledButton>
    )
  }
}

export default Button
