import * as React from 'react'
import PropTypes from 'prop-types'
import { space, layout } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { Container, Text, Count } from './styles'

Container.displayName = 'Pill'
class Pill extends React.PureComponent {

  static defaultProps = {
    active: false,
  }

  static propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    ...propTypes.space,
    ...propTypes.layout,
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
