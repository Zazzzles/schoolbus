import React from 'react'

import Pill from './'
import Flex from '../flex'

export default {
  title: 'Actions/ Pill',
  component: Pill,
  docs: {
    description: {
      component: 'The Pill component represents a clickable action, which can be used in forms or anywhere in a document that needs simple, standard button functionality.'
    }
  },
}

//TODO: Figure out why theme is being passed through in args as "theme"
export const Base = (args) => <Pill {...args}>Text here</Pill>
Base.args = {
  count: 5,
  active: true,
  onClick: console.log,
  variant: 'bordered'
}

export const Active = () => (
  <Flex>
    <Pill onClick={() => { }} active>
      Active
    </Pill>
    <Pill ml='1em' onClick={() => { }} count={5} active>
      Active with count
    </Pill>
  </Flex>
)

export const Inactive = () => (
  <Flex>
    <Pill onClick={() => {}}>Inactive (default)</Pill>
    <Pill ml='1em' onClick={() => {}} count={100}>
      Count
    </Pill>
    <Pill ml='1em' onClick={() => {}} variant='bordered'>
      Bordered
    </Pill>
  </Flex>
)
