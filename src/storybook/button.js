import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../'

import mdx from '../docs/button.mdx'

const flexContainer = { display: 'flex' }

storiesOf('Input | Button', module)
  .addParameters({
    docs: mdx,
    component: Button,
  })
  .add('Variants', () => (
    <div style={flexContainer}>
      <Button>Default</Button>
      <Button variant="primary" m={2}>
        Primary
      </Button>
      <Button variant="secondary" m={2}>
        Secondary
      </Button>
      <Button variant="tertiary" m={2}>
        Tertiary
      </Button>
      <Button variant="minimal" m={2}>
        Minimal
      </Button>
      <Button variant="danger" m={2}>
        Danger
      </Button>
      <Button variant="primary" isLoading m={2}>
        Submit
      </Button>
      <Button variant="primary" disabled m={2}>
        disabled
      </Button>
    </div>
  ))
  .add('Sizes', () => (
    <>
      <Button variant="tertiary" size="compact" m={2}>
        Compact
      </Button>
      <Button variant="tertiary" size="default" m={2}>
        Default
      </Button>
      <Button variant="tertiary" size="large" m={2}>
        Large
      </Button>
    </>
  ))
  .add('Shapes', () => (
    <>
      <Button shape="square" variant="primary" m={2}>
        Square
      </Button>
      <Button shape="round" variant="primary" m={2}>
        Round
      </Button>
      <Button shape="rounded" variant="primary" m={2}>
        Rounded
      </Button>
      <Button shape="block" variant="primary" m={2}>
        Block
      </Button>
    </>
  ))
