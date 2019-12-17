import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card } from '../'

import mdx from '../docs/card.mdx'

storiesOf('Card', module)
  .addParameters({
    docs: mdx,
    component: Card,
  })
  .add('Empty', () => <Card />)
  .add('With title', () => <Card title="Example" viewState></Card>)
  .add('With description', () => (
    <Card title="Example" description="This is a example description">
      content
    </Card>
  ))
  .add('With onAdd', () => (
    <Card
      title="Example"
      description="This is a example description"
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
      contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
    </Card>
  ))
  .add('viewstate hiding description and actions.', () => (
    <Card
      viewState
      title="Example"
      description="This is a example description"
      onAdd={() => console.log('adding')}
    >
      content
    </Card>
  ))
