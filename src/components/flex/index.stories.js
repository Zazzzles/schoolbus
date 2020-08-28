import React from 'react'
import { storiesOf } from '@storybook/react'
import Flex from './'
import Box from '../box'

storiesOf('Flex', module)
  .addParameters({ component: Flex })
  .add('Center', () => (
    <Flex justify="center" align="center" bg="gray.1">
      <Box p={3} m={1} width={1 / 2} color="white" bg="primary">
        Align & justify center
      </Box>
    </Flex>
  ))
  .add('Wrap', () => (
    <Flex wrap>
      <Box width="300px" m={1} p={3} color="white" bg="primary">
        Flex wrap
      </Box>
      <Box width="300px" m={1} p={3} color="white" bg="primary">
        Flex wrap
      </Box>
      <Box width="300px" m={1} p={3} color="white" bg="primary">
        Flex wrap
      </Box>
      <Box width="300px" m={1} p={3} color="white" bg="primary">
        Flex wrap
      </Box>
    </Flex>
  ))
  .add('Around', () => (
    <Flex justify="space-around" bg="gray.1">
      <Box width="300px" m={1} p={3} color="white" bg="primary">
        Justify around
      </Box>
      <Box width="300px" m={1} p={3} color="white" bg="primary">
        Justify around
      </Box>
    </Flex>
  ))
