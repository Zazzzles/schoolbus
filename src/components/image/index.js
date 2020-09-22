import styled from 'styled-components'
import { layout, shadow } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import theme from '../../config/theme'

const SHAPES = {
  square: 'square',
  round: 'round',
  rounded: 'rounded',
}

const shape = ({ shape, theme }) => {
  if (shape === SHAPES.round) {
    return { borderRadius: theme.radii.full }
  }

  if (shape === SHAPES.rounded) {
    return { borderRadius: theme.radii.large }
  }

  return theme.radii.none
}

const Image = styled.img.attrs({
  alt: '',
})`
  display: block;
  max-width: 100%;
  height: auto;
  ${shape}
  ${layout}
  ${shadow}
`

Image.displayName = 'Image'

Image.propTypes = {
  ...propTypes.layout,
  ...propTypes.shadow,
}

Image.defaultProps = {
  theme,
  shape: SHAPES.square,
}

export default Image
