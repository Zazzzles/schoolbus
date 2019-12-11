import * as React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import baseTheme from '../../config/theme'

const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={baseTheme}>{children}</StyledThemeProvider>
)

ThemeProvider.propTypes = {
  theme: PropTypes.object,
}

export default React.memo(ThemeProvider)
