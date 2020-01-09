import styled from 'styled-components'


export const Button = styled.button`
  padding: 0;
  margin-top: .7em;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.transparent};
`