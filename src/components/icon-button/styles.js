import styled from 'styled-components'
import Flex from '../flex'

const buttonSizes = {
  xsmall: '28px',
  small: '32px',
  medium: '38px',
  large: '44px',
  xlarge: '48px'
}

export const Button = styled(Flex).attrs({
  as: 'button',
  type: 'button'
})`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  background-color: ${({ theme, color }) => theme.colors?.[color] || color};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'inherit'};
  box-shadow: ${({ noShadow, theme }) => noShadow ? 'unset' : theme.shadows[1]};
  width: ${({ size }) => buttonSizes[size]};
  min-width: ${({ size }) => buttonSizes[size]};
  height: ${({ size }) => buttonSizes[size]};
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
