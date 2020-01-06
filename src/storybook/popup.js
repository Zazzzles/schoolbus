import React from 'react'
import { storiesOf } from '@storybook/react'

import mdx from '../docs/popup.mdx'

import { Popup, Flex, Button } from '../'

const styles = {
  container: {
    padding: "0 100px 40px"
  }
}

storiesOf('Popup', module)
  .addParameters({
    component: Popup,
    docs: mdx,
  })
  .add('Position', () => (
    <>
      <Flex style={styles.container}>
        <Popup>bottomLeft (default)</Popup>
      </Flex>
      <Flex style={styles.container}>
        <Popup position="topLeft">topLeft</Popup>
      </Flex>
      <Flex style={styles.container}>
        <Popup position="topRight">topRight</Popup>
      </Flex>
      <Flex style={styles.container}>
        <Popup position="bottomRight">bottomRight</Popup>
      </Flex>
    </>
  ))
  .add('Trigger', () => (
    <Flex flexDirection="column">
      <Popup>default trigger</Popup>
      <Popup 
        position="bottomRight" 
        trigger={<Button variant="primary">Custom trigger</Button>}
      >
        Custom trigger
      </Popup>
    </Flex>
  ))
  .add('closePopup', () => (
    <>
      <Popup
        position="bottomRight"
      >
        {closePopup => (
          <Button variant="Tertiary" onClick={() => { closePopup() }}>Click me</Button>
        )}
      </Popup>
    </>
  ))
