import React from 'react'
import { storiesOf } from '@storybook/react'

import { Pill } from '../'
import { Flex } from '../'

import mdx from '../docs/pill.mdx'

storiesOf('Pill', module)
  .addParameters({
    component: Pill,
    docs: mdx,
  })
  .add('Active', () => (
    <Flex>
      <Pill onClick={() => { }} active>Active</Pill>
      <Pill ml="1em" onClick={() => { }} count={5} active>Count</Pill>   
    </Flex>
  ))
  .add('Inactive', () => (
    <Flex>
      <Pill onClick={() => { }}>Inactive (default)</Pill>
      <Pill ml="1em" onClick={() => { }} count={100}>Count</Pill>
      <Pill ml="1em" onClick={() => { }} bordered>Bordered</Pill>
    </Flex>
  ))
