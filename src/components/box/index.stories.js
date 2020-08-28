import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'

import Box from './'

storiesOf('Box', module)
  .addParameters({ component: Box })
  .add('Padding', () => <Box p={number('Padding', 3)}>With padding</Box>)
  .add('Margin', () => <Box m={number('Margin', 3)}>With margin</Box>)
  .add('Color', () => (
    <Box p={3} color={text('Color', 'primary')}>
      Color
    </Box>
  ))
  .add('Background color', () => (
    <Box p={3} color={text('Color', 'primary')} bg={text('Background color', 'primary')}>
      Background color
    </Box>
  ))
  .add('Width', () => (
    <Box p={3} width={1 / 2} color="white" bg="primary">
      Half Width
    </Box>
  ))
  .add('Pixel width', () => (
    <Box p={3} width={256} color="white" bg="primary">
      256px width
    </Box>
  ))
  .add('VW Width', () => (
    <Box p={3} width="50vw" color="white" bg="primary">
      50vw width
    </Box>
  ))
  .add('Directional padding', () => (
    <Box p={3}>
      <Box m={1} pt={3} color="white" bg="primary">
        Padding Top
      </Box>
      <Box m={1} pr={3} color="white" bg="primary">
        Padding Right
      </Box>
      <Box m={1} pb={3} color="white" bg="primary">
        Padding Bottom
      </Box>
      <Box m={1} pl={3} color="white" bg="primary">
        Padding Left
      </Box>
      <Box m={1} px={3} color="white" bg="primary">
        Padding X-Axis
      </Box>
      <Box m={1} py={3} color="white" bg="primary">
        Padding Y-Axis
      </Box>
    </Box>
  ))
  .add('Directional margin', () => (
    <Box p={3}>
      <Box mt={3} color="white" bg="primary">
        Margin Top
      </Box>
      <Box mr={3} color="white" bg="primary">
        Margin Right
      </Box>
      <Box mb={3} color="white" bg="primary">
        Margin Bottom
      </Box>
      <Box ml={3} color="white" bg="primary">
        Margin Left
      </Box>
      <Box mx={3} color="white" bg="primary">
        Margin X-Axis
      </Box>
      <Box my={3} color="white" bg="primary">
        Margin Y-Axis
      </Box>
    </Box>
  ))
