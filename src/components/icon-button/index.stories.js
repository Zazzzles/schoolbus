import React from 'react'
import IconButton from './'
import Flex from '../flex'
import Text from '../text'


export default {
  title: 'Actions/ Icon Button',
  component: IconButton,
}

export const Base = (args) => <IconButton {...args} />
Base.args = {
  fontSize: 'large',
  color: 'gray.dark',
  iconColor: 'primary',
  badge: 2,
  noShadow: false,
  icon: 'Plus'
}

export const variant = () => (
  <>
    <Text mb='1em'>
      variant <em>(E.G. primary, secondary, light, danger)</em>
    </Text>
    <Flex m='.5em 0 2em'>
      <IconButton variant='primary' mr='1em' />
      <IconButton variant='secondary' mr='1em' />
      <IconButton variant='light' mr='1em' />
      <IconButton variant='danger' mr='1em' />
    </Flex>
  </>
)

export const color = () => (
  <>
    <Text mb='1em'>
      color <em>(E.G. primary, #333)</em>
    </Text>
    <Flex m='.5em 0 2em'>
      <IconButton color='primary' mr='1em' />
      <IconButton color='#333' mr='1em' />
    </Flex>
  </>
)

export const iconColor = () => (
  <>
    <Text mb='1em'>
      iconColor <em>(E.G. gray.default, #FEFEFE)</em>
    </Text>
    <Flex m='.5em 0 2em'>
      <IconButton iconColor='gray.default' mr='1em' />
      <IconButton iconColor='#FEFEFE' mr='1em' />
    </Flex>
  </>
)
