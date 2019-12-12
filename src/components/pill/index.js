import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, layout } from 'styled-system'

import theme from '../../config/theme'

const VARIANTS = {
  active: 'active',
  inactive: 'inactive',
}

const StyledPill = styled.button.attrs({
  type: 'button',
})`
  background-color: ${({theme}) => theme.colors.transparent};
  color: ${({variant, theme}) =>
    variant === VARIANTS.active ? theme.colors.primary : theme.colors.gray.xdark};
  padding: 1em;
  min-width: 80px;
  border-radius: ${({theme}) => theme.radii.full};
  box-shadow: ${({variant, theme}) => (variant === VARIANTS.active ? theme.shadows[1] : 'none')};
  border: none;
  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight: ${({theme}) => theme.fontWeights.bold};
  font-family: ${({theme}) => theme.fonts.Montserrat};
  ${space}
  ${layout}
`

StyledPill.displayName = 'Pill'

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
    return <StyledPill {...this.props} />
  }
}

export default Pill
