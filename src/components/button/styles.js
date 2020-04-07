import styled from 'styled-components'
import { typography, layout, space, buttonStyle } from 'styled-system'

export const SHAPES = {
  square: 'square',
  round: 'round',
  rounded: 'rounded',
  block: 'block',
}

export const SIZES = {
  compact: 'compact',
  default: 'default',
  large: 'large',
}

const radius = ({ shape, theme }) => ({
  borderRadius: shape === SHAPES.rounded ? theme.radii.large : theme.radii.small,
})

const size = ({ size, theme }) => ({
  fontSize: size === SIZES.large ? theme.fontSizes.medium : theme.fontSizes.small,
  padding:
    size === SIZES.compact
      ? '5px 10px'
      : size === SIZES.default
        ? '10px 20px'
        : '15px 40px',
})

const getWidth = ({ shape, width }) => {
  if (shape === SHAPES.block) return '100%'
  if (width) return width
  return 'auto'
}

export const StyledButton = styled.button.attrs({
  type: 'button',
})`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  min-width: 120px;
  width: ${props => getWidth(props)};
  border: none;
  cursor: pointer;
  transition: transform 0.1s;
  min-height: 2.9em;
  &:hover {
    opacity: .9;
  }
  &:active {
    transform: ${({ shape }) => (shape === SHAPES.block ? 'scale(1)' : 'scale(0.99)')};
    opacity: 1;
  }
  &:disabled {
    opacity: 1;
    cursor: default;
  }
  > div {
    margin: auto;
  }
  ${buttonStyle}
  ${radius}
  ${size}
  ${space}
  ${layout}
  ${typography}
`
