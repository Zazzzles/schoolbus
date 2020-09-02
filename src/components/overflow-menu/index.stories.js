import React from 'react'
import OverflowMenu from './'

const options = [
  {
    name: 'With onClick',
    onClick: () => {
      console.log('click')
    },
  },
  {
    name: 'With href',
    href: '/',
  },
]

export default {
  title: 'Actions/Overflow Menu',
  component: OverflowMenu,
  parameters: {
    docs: {
      description: {
        component: 'Displays a list of options when clicking on the overflow icon.'
      }
    },
  }
}

export const Base = (args) => <OverflowMenu {...args} />
Base.args = {
  options
}
