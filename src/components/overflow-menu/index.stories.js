import React from 'react'
import { storiesOf } from '@storybook/react'
import OverflowMenu from './'

const options = [{
  name: "With onClick",
  onClick: () => { console.log("click") }
}, {
  name: "With href",
  href: "/"
}]

storiesOf('Overflow Menu', module)
  .addParameters({ component: OverflowMenu })
  .add('Default', () => (
    <OverflowMenu options={options}/>
  ))
