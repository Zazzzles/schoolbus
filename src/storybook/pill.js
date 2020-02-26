import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { Pill } from '../'

import mdx from '../docs/pill.mdx'

storiesOf('Pill', module)
  .addParameters({
    component: Pill,
    docs: mdx,
  })
  .add('Active', () => <Pill variant={text('Variant', 'active')}>Active</Pill>)
  .add('Inactive', () => <Pill variant={text('Variant', 'inactive')}>Inactive</Pill>)
  .add('Count, Active', () => <Pill count={5} variant={text('Variant', 'active')}>Active</Pill>)
  .add('Count, Inactive', () => <Pill count={100} variant={text('Variant', 'inactive')}>Inactive</Pill>)
