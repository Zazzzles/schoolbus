import * as React from 'react'
import styled from 'styled-components'

import Box from '../box'

const CopyrightText = styled.p.attrs({
  role: 'contentinfo',
})`
  text-align: center;
  margin: 2em 0 0;
  color: ${({theme}) => theme.colors.gray.light};
  font-size: ${({theme}) => theme.fontSizes.xsmall};
  font-family: ${({theme}) => theme.fonts.Montserrat};
  font-weight: ${({theme}) => theme.fontWeights.bold};
`

CopyrightText.displayName = 'CopyrightText'

const Footer = ({ copyright, children, ...otherProps }) => (
  <Box {...otherProps}>
    {children}
    <CopyrightText>{copyright}</CopyrightText>
  </Box>
)

Footer.defaultProps = {
  copyright: '2019 Lesson Desk (Pty) Ltd. All rights reserved.',
}

Footer.displayName = 'Footer'

export default Footer
