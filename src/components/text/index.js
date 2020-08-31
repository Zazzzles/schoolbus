import styled from 'styled-components'
import { typography, space, color } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import theme from '../../config/theme'

const Text = styled.p`
  color: ${({theme}) => theme.colors.gray.xdark};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  ${typography}
  ${space}
  ${color}
`

Text.defaultProps = {
  theme,
}

Text.propTypes = {
  ...propTypes.typography,
  ...propTypes.space,
  ...propTypes.color,
}

Text.displayName = 'Text'

export default Text
