
import styled from 'styled-components'
import { typography, space, layout } from 'styled-system'

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semi};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray.dark};
  ${typography}
  ${space}
  ${layout}

  ${({ disabled }) => disabled ? `
    opacity: 0.7;
  ` : `
    cursor: pointer;
  `}
`

export const StyledSpan = styled.span`
  margin-left: 0.5em;
`