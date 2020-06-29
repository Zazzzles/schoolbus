import styled from 'styled-components'
import { typography, space, color } from 'styled-system'

import theme from '../../config/theme'

const Text = styled.p`
  color: ${({theme}) => theme.colors.gray.xdark};
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'unset'};
  ${typography}
  ${space}
  ${color}
`

Text.defaultProps = {
  theme,
}

Text.propTypes = {
  ...typography.propTypes,
  ...space.propTypes,
  ...color.propTypes,
}

Text.displayName = 'Text'

export default Text
