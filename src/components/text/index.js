import styled from 'styled-components'
import { typography, space, layout, color } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import theme from '../../config/theme'

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray.xdark};
  ${({ uppercase }) => uppercase && 'text-transform: uppercase;'}
  ${typography}
  ${layout}
  ${space}
  ${color}
`

Text.defaultProps = {
  theme,
}

Text.propTypes = {
  ...propTypes.typography,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.color,
}

Text.displayName = 'Text'

export default Text
