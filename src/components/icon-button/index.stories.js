import React from 'react'
import IconButton from './'
import Flex from '../flex'
import Text from '../text'
import IconButton2 from './icon-button2'


export default {
  title: 'Actions/ Icon Button',
  component: IconButton,
}

export const Base = (args) => <>
  <IconButton {...args} />
  <IconButton2 {...args} />
</>
Base.args = {
  fontSize: 'large',
  color: 'gray.dark',
  iconColor: 'primary',
  badge: 2,
  noShadow: false,
  icon: 'Plus'
}

export const Props = () => (
  <>
    <Text>default icon button</Text>
    <Flex m='.5em 0 2em'>
      <IconButton />
      <IconButton2 />
    </Flex>

    <Text>
      size <em>(string)</em>
    </Text>
    <Text fontSize='small'>xsmall, small, medium, large, xlarge</Text>

    <Flex alignItems='center' m='.5em 0 2em'>
      <IconButton size='xsmall' />
      <IconButton size='small' ml='1em' />
      <IconButton size='medium' ml='1em' />
      <IconButton size='large' ml='1em' />
      <IconButton size='xlarge' ml='1em' />
    </Flex>
    <Flex alignItems='center'>
      <IconButton2 size='xsmall' />
      <IconButton2 size='small' ml='1em' />
      <IconButton2 size='medium' ml='1em' />
      <IconButton2 size='large' ml='1em' />
      <IconButton2 size='xlarge' ml='1em' />
    </Flex>

    <Text>
      color <em>(string | sets background color | E.g 'primary' or '#fefefe')</em>
    </Text>
    <Flex m='.5em 0 2em'>
      <IconButton color='secondary' />
      <IconButton color='blue' ml='1em' iconColor='white' />
      <IconButton color='#cce1ed' ml='1em' />
    </Flex>
    <Flex>
      <IconButton2 color='secondary' />
      <IconButton2 color='blue' ml='1em' iconColor='white' />
      <IconButton2 color='#cce1ed' ml='1em' />
    </Flex>

    <Text>
      iconColor <em>(string | E.g 'primary' or '#fefefe')</em>
    </Text>
    <Flex m='.5em 0 2em'>
      <IconButton color='black' iconColor='white' />
      <IconButton color='green' iconColor='#eaff00' ml='1em' />
    </Flex>
    <Flex>
      <IconButton2 color='black' iconColor='white' />
      <IconButton2 color='green' iconColor='#eaff00' ml='1em' />
    </Flex>

    <Text>
      icon
      <em> (string)</em>
    </Text>

    <Flex m='.5em 0 2em'>
      <IconButton color='white' icon='edit' />
      <IconButton color='white' icon='download' ml='1em' />
      <IconButton color='white' ml='1em' icon='back' />
      <IconButton icon='delete' ml='1em' />
    </Flex>
    <Flex m='.5em 0 2em'>
      <IconButton2 color='white' icon='edit' />
      <IconButton2 color='white' icon='download' ml='1em' />
      <IconButton2 color='white' ml='1em' icon='back' />
      <IconButton2 icon='delete' ml='1em' />
    </Flex>

    <Text>
      children <em>(node | optional)</em>
    </Text>
    <Flex m='.5em 0 2em'>
      <IconButton color='white'>
        <h3>123</h3>
      </IconButton>
    </Flex>

    <Text>
      badge <em>(string or number)</em>
    </Text>
    <Flex m='.5em 0 2em'>
      <IconButton icon='filter' iconColor='primary' color='white' badge={2} />
    </Flex>

    <Text>
      noShadow <em>(boolean | default = false)</em>
    </Text>
    <Flex m='.5em 0 2em'>
      <IconButton noShadow />
    </Flex>

    <Text>
      disabled <em>(boolean | default = false)</em>
    </Text>
    <Flex m='.5em 0 2em'>
      <IconButton disabled />
    </Flex>
  </>
)
