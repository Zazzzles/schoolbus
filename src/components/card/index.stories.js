import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './'

import mdx from './index.stories.mdx'

const description = 'Lorem ipsum dolor amet twee occupy deep v cold-pressed. Street art skateboard man braid sint sed venmo in, cillum YOLO organic.'

storiesOf('Card', module)
  .addParameters({
    docs: mdx,
    component: Card,
  })
  .add('Empty', () => <Card />)
  .add('With title', () => <Card title="Example" viewState></Card>)
  .add('With description', () => (
    <Card title="Example" description={description}>
      content
    </Card>
  ))
  .add('With onAdd', () => (
    <Card
      title="Example"
      description={description}
      onAdd={() => console.log('adding')}
    >
      content
    </Card>
  ))
  .add('Hidden divider, no description', () => (
    <Card
      hideDivider
      title="Example"
      onAdd={() => console.log('adding')}
    >
      content
    </Card>
  ))
  .add('viewstate hiding description and actions.', () => (
    <Card
      viewState
      title="Example"
      description={description}
      onAdd={() => console.log('adding')}
    >
      content
    </Card>
  ))
