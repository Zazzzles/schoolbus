import styled from 'styled-components'

export const Container = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
`

export const Value = styled.button`
  padding: 0.3em 1em;
  margin-right: 1em;
  font: ${({ theme }) => theme.fonts.Montserrat};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border-radius: ${({ theme }) => theme.radii.large};
  border: none;
  cursor: pointer;

  ${({ selected, theme }) => selected ? `
    color: ${theme.colors.gray.xxdark};
    background-color: ${theme.colors.white};
    box-shadow: 0 0 1em 0 ${theme.colors.gray.default};
  ` : `
    color: ${theme.colors.gray.dark};
    background-color: ${theme.colors.gray.xlight};
  `}
`
