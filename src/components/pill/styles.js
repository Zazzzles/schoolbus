import styled from 'styled-components'
import { space, layout } from 'styled-system'

export const Container = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.gray.xdark};
  height: 2.5em;
  min-width: 80px;
  border-radius: ${({ theme }) => theme.radii.full};
  box-shadow: ${({ active, theme }) => active ? theme.shadows[1] : 'none'};
  border: ${({ active, theme, count, bordered }) => (
    (count >= 0 && !active) || (bordered && !active) ? `1px solid ${theme.colors.gray.light}` : 'none'
  )};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  ${space}
  ${layout}
`

export const Text = styled.span`
  margin: 0 1em;
`

export const Count = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2em;
  width: 2em;
  min-width: 2em;
  margin-right: .3em;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme, active }) => (
    active ? theme.colors.orange[0] : theme.colors.gray.light
  )};
`