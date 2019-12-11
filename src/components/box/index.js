import styled from 'styled-components'
import { space, color, layout, flexbox } from 'styled-system'
import theme from '../../config/theme'

const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`

Box.displayName = 'Box'

Box.defaultProps = {
  theme,
}

Box.propTypes = {
  ...space.propTypes,
  ...layout.propTypes,
  ...color.propTypes,
  ...flexbox.propTypes,
}

export default Box
