import styled from 'styled-components'

const getButtonColor = ({ theme, color, disabled, icon, badge }) => {
  const isGray = disabled || (badge && color === 'white')
  if (isGray) return theme.colors.gray.xlight

  const { colors: themeColors } = theme
  if (icon === 'delete') return themeColors.red[1]

  if (Object.keys(themeColors).includes(color)) {
    const selectedColor = themeColors[color]
    return Array.isArray(selectedColor) ? selectedColor[2] : selectedColor
  }
  return color
}

const buttonSizes = {
  xsmall: '28px',
  small: '32px',
  medium: '38px',
  large: '44px',
  xlarge: '48px'
}

export const Button = styled.button.attrs({
  type: 'button'
})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  background-color: ${props => getButtonColor(props)};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'inherit'};
  box-shadow: ${({ noShadow, theme }) => noShadow ? 'unset' : theme.shadows[1]};
  width: ${({ size }) => buttonSizes[size]};
  min-width: ${({ size }) => buttonSizes[size]};
  height: ${({ size }) => buttonSizes[size]};
  margin: ${({ m }) => m || '0'};
  margin-top: ${({ mt }) => mt || '0'};
  margin-right: ${({ mr }) => mr || '0'};
  margin-bottom: ${({ mb }) => mb || '0'};
  margin-left: ${({ ml }) => ml || '0'};
  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
    opacity: .9;
  }
  &:active {
    transform: scale(0.98);
  }
`

export const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: -5px;
  height: 18px;
  min-width: 18px;
  padding: 0 6px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 0;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`
