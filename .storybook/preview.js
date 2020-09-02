import { Formik } from 'formik'
import theme from '../src/config/theme'
import { ThemeProvider, Box, Normalize } from '../src'

export const decorators = [
  (Story, { parameters }) => (
    <ThemeProvider theme={theme}>
      <>
        <Normalize />
        <Box p={3}>
          {parameters?.formik 
            ? <Formik {...parameters.formik}><Story /></Formik>
            : <Story />}
        </Box>
      </>
    </ThemeProvider>
  )
]