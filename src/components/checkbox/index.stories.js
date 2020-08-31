import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from './'

import mdx from './index.stories.mdx'

storiesOf('Input/ Checkbox', module)
  .addParameters({
    component: Checkbox,
    docs: mdx,
  })
  .add('Without label', () => <Checkbox />)
  .add('With Label', () => <Checkbox>With Label</Checkbox>)
  .add('Checked', () => <Checkbox checked>With Label</Checkbox>)
  .add('Disabled', () => <Checkbox disabled>Disabled</Checkbox>)
