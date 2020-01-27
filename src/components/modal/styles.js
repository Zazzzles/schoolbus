import styled from 'styled-components'

export const Header = styled.div`
  max-width: 1100px;
`
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gray.xxdark};
`

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semi};
  color: ${({ theme }) => theme.colors.gray.xxdark};
  margin-top: 2.5em;
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.gray.dark};
  margin-top: 1.5em;
`

export const Actions = styled.div`
  margin-top: 2em;
`

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 1em 0;
`

export const InnerContent = styled.div`
  padding: 1em;
  margin: ${({ hasHeader }) => hasHeader ? '0 -1em' : '-2em -1em 0'};
  overflow: auto;
`

export const Footer = styled.div`
  padding: 0 0 2em;
`

export const FadeOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(white 0%, transparent 1.5em, transparent calc(100% - 1em), white 100% );
  pointer-events: none;
`
