import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { jsxDecorator } from 'storybook-addon-jsx'

import { ThemeProvider, Box, Normalize } from '../src'

import theme from './theme'

addParameters({
  options: {
    theme,
  },
})

addDecorator(jsxDecorator)
addDecorator(story => (
  <ThemeProvider>
    <>
    <Normalize/>
    <Box p={3}>{story()}</Box>
    </>
  </ThemeProvider>
))

addDecorator(withA11y)
addDecorator(withKnobs)