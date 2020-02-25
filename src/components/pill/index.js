import * as React from 'react'
import PropTypes from 'prop-types'
import { space, layout } from 'styled-system'

import { Container, Text, Count } from './styles'

import theme from '../../config/theme'

const VARIANTS = {
  active: 'active',
  inactive: 'inactive',
}

Container.displayName = 'Pill'

class Pill extends React.PureComponent {
  static VARIANTS = VARIANTS

  static defaultProps = {
    theme,
    variant: VARIANTS.inactive,
  }

  static propTypes = {
    variant: PropTypes.oneOf(Object.keys(VARIANTS)),
    ...space.propTypes,
    ...layout.propTypes,
  }

  render() {
    const { children, ...otherProps } = this.props
    const count = 0

    return (
      <Container {...otherProps}>
        <Text>{children}</Text>
        {count >= 0 && <Count>{count}</Count>}
      </Container>
    )
  }
}

export default Pill
