import styled from 'styled-components'
import { space, layout } from 'styled-system'

const VARIANTS = {
  active: 'active',
  inactive: 'inactive',
}

export const Container = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ variant, theme }) =>
    variant === VARIANTS.active ? theme.colors.primary : theme.colors.gray.xdark};
  height: 2.5em;
  min-width: 80px;
  border-radius: ${({ theme }) => theme.radii.full};
  box-shadow: ${({ variant, theme, count }) => (
    variant === VARIANTS.active ? theme.shadows[1] : 'none'
  )};
  border: ${({ variant, theme, count }) => (
    count >= 0 && (variant === VARIANTS.inactive) ? `1px solid ${theme.colors.gray.light}` : 'none'
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
  padding: 0 .5em;
  min-width: 2em;
  margin-right: .25em;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme, variant }) => (variant === VARIANTS.active) 
  ? theme.colors.orange[0] : theme.colors.gray.light};
`