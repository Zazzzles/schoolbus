import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './'

storiesOf('Input | Input', module)
  .addParameters({ component: Input })
  .add('Without label', () => <Input id="1" name="1" placeholder="Without label" />)
  .add('With label', () => <Input id="2" label="Label" name="2" />)
  .add('Disabled', () => <Input id="3" label="Disabled" name="3" disabled />)
  .add('With alert', () => <Input id="4" label="With Alert" name="4" alertText="Required" />)
