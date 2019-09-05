import React from 'react'
import { storiesOf } from '@storybook/react'

import { Tooltip } from '../'

import mdx from '../docs/tooltip.mdx'

storiesOf('Tooltip', module)
  .addParameters({
    component: Tooltip,
    docs: mdx,
  })
  .add('Basic', () => (
    <div>
      <Tooltip />
      <p data-tip="hello world">Tooltip</p>
    </div>
  ))
