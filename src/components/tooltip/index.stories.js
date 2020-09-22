import React from 'react'

import Tooltip from './'

export default {
  title: 'Misc/Tooltip',
  parameters: {
    docs: {
      description: {
        component:
          'A lightweight & responsive tooltip component build on[react - tooltip](https://www.npmjs.com/package/react-tooltip).',
      },
    },
  },
}

export const Base = args => <Tooltip {...args}>This is some text</Tooltip>
Base.args = {
  text: 'This is a tooltip',
}
