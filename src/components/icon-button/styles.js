import styled from 'styled-components'
import Flex from '../flex'

export const Button = styled(Flex).attrs({
  as: 'button',
  type: 'button',
})`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'inherit')};
  box-shadow: ${({ noShadow, theme }) => (noShadow ? 'unset' : theme.shadows[1])};
  width: ${({ size }) => size};
  min-width: ${({ size }) => size};
  height: ${({ size }) => size};
  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    opacity: 0.9;
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
