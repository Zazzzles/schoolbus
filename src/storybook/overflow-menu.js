import React from 'react'
import { storiesOf } from '@storybook/react'
import { OverflowMenu, Button } from '../'

storiesOf('Overflow Menu', module)
  .addParameters({ component: OverflowMenu })
  .add('Position Right', () => (
    <OverflowMenu position="bottomRight">
      {closePopup => <Button onClick={closePopup} variant="Tertiary">Click me</Button>}
    </OverflowMenu>
  ))
  .add('Bottom', () => (
    <OverflowMenu position="bottom">
      <h1>Item 1</h1>
      <h1>Item 2</h1>
    </OverflowMenu>
  ))
