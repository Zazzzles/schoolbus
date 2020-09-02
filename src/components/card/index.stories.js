import React from 'react'

import Card from './'

const description = 'Magna laboris sit consectetur nulla. Fugiat commodo anim amet consectetur et amet sint reprehenderit mollit aliqua.'

export default {
  title: 'Containers & Wrappers/ Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'The card component provides a flexible and extensible content container with multiple ' +
        'variants and options. The description and onAdd button will be hidden when in viewstate.'
      }
    }
  },
}

export const Base = (args) => <Card {...args} onAdd={console.log}>Children go here</Card>
Base.args = {
  title: 'This is a title',
  description: 'This is the description. Consectetur id ipsum ex adipisicing. Occaecat incididunt tempor sit amet laboris eiusmod eu ullamco.',
  onAdd: console.log,
  actions: '',
  viewState: true,
  hideDivider: false,
}
export const WithTitle = () => <Card title='Example' viewState></Card>
export const WithDescription = () => (
  <Card title='Example' description={description}>
    content
  </Card>
)
export const WithOnAdd = () => (
  <Card title='Example' description={description} onAdd={() => console.log('adding')}>
    content
  </Card>
)
export const HiddenDividerNoDescription = () => (
  <Card hideDivider title='Example' onAdd={() => console.log('adding')}>
    content
  </Card>
)
export const ViewstateHidingDescriptionAndActions = () => (
  <Card viewState title='Example' description={description} onAdd={() => console.log('adding')}>
    content
  </Card>
)
