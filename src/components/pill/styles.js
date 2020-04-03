import styled from 'styled-components'
import { space, layout } from 'styled-system'

export const Container = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.gray.xdark};
  height: 2.5em;
  min-width: 80px;
  border-radius: ${({ theme }) => theme.radii.full};
  box-shadow: ${({ active, theme }) => active ? theme.shadows[1] : 'none'};
  border: ${({ active, theme, count, bordered }) => (
    `1px solid ${(count >= 0 && !active) || (bordered && !active) 
      ? theme.colors.gray.light 
      : theme.colors.transparent}`
  )};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  cursor: ${({ onClick, disabled }) => onClick && !disabled ? 'pointer' : 'default'};
  ${space}
  ${layout}
  &:hover {
    border: ${({ onClick, disabled, active, theme }) => onClick && !disabled && !active
      ? `1px solid ${theme.colors.gray.default}` : 'default'
    };
  }
  transition: border 200ms ease-out;
`

export const Text = styled.span`
  margin: 0 1em;
`

export const Count = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2em;
  min-width: 2em;
  min-width: 2em;
  padding: 0 .5em;
  margin-right: .3em;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme, active }) => (
    active ? theme.colors.orange[0] : theme.colors.gray.light
  )};
`