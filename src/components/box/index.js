import styled from 'styled-components'
import { space, color, layout, flexbox, border } from 'styled-system'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import theme from '../../config/theme'

const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${border}
  ${({ theme, shadow }) => shadow !== undefined && `
    box-shadow: ${theme.shadows?.[shadow] || shadow};
  `};
  ${({ theme, radius }) => radius && `
    border-radius: ${theme.radii[radius] || radius};
  `};
`

Box.displayName = 'Box'

Box.defaultProps = {
  theme,
}

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.border,
  radius: PropTypes.string,
  shadow: PropTypes.string
}

export default Box
