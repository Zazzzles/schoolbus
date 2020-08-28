import * as React from 'react'
import PropTypes from 'prop-types'
import { space, layout } from 'styled-system'

import { Container, Text, Count } from './styles'

import theme from '../../config/theme'

Container.displayName = 'Pill'

class Pill extends React.PureComponent {

  static defaultProps = {
    theme,
    active: false,
  }

  static propTypes = {
    active: PropTypes.bool,
    ...space.propTypes,
    ...layout.propTypes,
  }

  render() {
    const { children, active, count, ...otherProps } = this.props

    return (
      <Container active={active} count={count} {...otherProps}>
        <Text active={active}>{children}</Text>
        {count >= 0 && <Count active={active}>{count}</Count>}
      </Container>
    )
  }
}

export default Pill
