import { addParameters } from '@storybook/client-api'
import { Formik } from 'formik'
import { ThemeProvider, Box, Normalize } from '../src'
import theme from './theme'

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

addParameters({
  viewMode: 'docs',
})