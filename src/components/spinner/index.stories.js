import React from 'react'
import Spinner from './'

export default {
  title: 'Misc/Spinner',
  component: Spinner,
}

export const Base = (args) => <Spinner {...args} />
Base.args = { size: '5em', margin: '3em' }
