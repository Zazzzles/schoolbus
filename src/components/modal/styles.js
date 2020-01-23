import styled from 'styled-components'

export const Header = styled.h1`
  max-width: 1100px;
`
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gray.xxdark};
`
export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.gray.dark};
  margin-top: 1.5em;
`

export const InnerContent = styled.div`
`

export const styleOverrides = {
  closeBtn: {
    position: "absolute",
    top: 25,
    right: 25
  },
  content: {
    maxHeight: '70vh',
    maxWidth: 1100,
    overflow: 'auto'
  }
}
