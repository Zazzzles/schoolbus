import React from 'react'
import Button from './'

export default {
  title: 'Actions/ Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'The Button component represents a clickable button that can be used for actions in forms, dialogs, and more.'
      }
    }
  },
}

export const Base = (args) => <Button {...args}>Hello World!</Button>
Base.args = {
  variant: 'primary',
  size: 'default',
  shape: 'round',
  disabled: false,
  isLoading: false
}

export const Variants = () => (
  <>
    <Button>Default</Button>
    <Button variant='primary' m={2}>
      Primary
    </Button>
    <Button variant='secondary' m={2}>
      Secondary
    </Button>
    <Button variant='tertiary' m={2}>
      Tertiary
    </Button>
    <Button variant='minimal' m={2}>
      Minimal
    </Button>
    <Button variant='danger' m={2}>
      Danger
    </Button>
    <Button variant='primary' isLoading m={2}>
      Submit
    </Button>
    <Button variant='primary' disabled m={2}>
      Disabled
    </Button>
  </>
)

export const Sizes = () => (
  <>
    <Button variant='tertiary' size='compact' m={2}>
      Compact
    </Button>
    <Button variant='tertiary' size='default' m={2}>
      Default
    </Button>
    <Button variant='tertiary' size='large' m={2}>
      Large
    </Button>
  </>
)

export const Shapes = () => (
  <>
    <Button shape='square' variant='primary' m={2}>
      Square
    </Button>
    <Button shape='round' variant='primary' m={2}>
      Round
    </Button>
    <Button shape='rounded' variant='primary' m={2}>
      Rounded
    </Button>
    <Button shape='block' variant='primary' m={2}>
      Block
    </Button>
  </>
)
