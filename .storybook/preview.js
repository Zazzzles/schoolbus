import { ThemeProvider, Box, Normalize } from '../src'
import theme from './theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <>
        <Normalize />
        <Box p={3}>
          <Story />
        </Box>
      </>
    </ThemeProvider>
  )
]