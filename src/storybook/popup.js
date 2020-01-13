import React from 'react'
import { storiesOf } from '@storybook/react'

import mdx from '../docs/popup.mdx'
import { Popup, Flex, Button } from '../'

const styles = {
  container: {
    alignItems: 'center',
    padding: "0 150px 50px"
  },
  content: {
    padding: '5px 10px'
  }
}

const options = [
  'bottomRight', 'bottomLeft', 'topLeft', 'topRight',
  'topCenter', 'bottomCenter', 'leftCenter', 'rightCenter'
]

storiesOf('Popup', module)
  .addParameters({
    component: Popup,
    docs: mdx,
  })
  .add('Default', () => (
    <Popup>
      Content
    </Popup>
  ))
  .add('Position', () => (
      options.map(option => (
        <Flex style={styles.container}>
          <Popup contentStyle={styles.content} position={option}>Content</Popup>
          {option}
          {option === 'bottomLeft' && ` (default)`}
        </Flex>
      ))  
  ))
  .add('Custom Trigger', () => (
    <Flex flexDirection="column">
      <Popup 
        position="bottomRight" 
        trigger={<Button variant="primary">Custom trigger</Button>}
      >
        Custom trigger
      </Popup>
    </Flex>
  ))
  .add('closeOnSelect', () => (
    <Popup closeOnSelect position="bottomRight">
      Click me
    </Popup>
  ))
  .add('closePopup', () => (
    <Popup position="bottomRight">
      {closePopup => (
        <Button variant="Tertiary" onClick={closePopup}>Click me</Button>
      )}
    </Popup>
  ))
