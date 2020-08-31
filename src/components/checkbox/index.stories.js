import React from 'react'
import Checkbox from './'

import mdx from './index.stories.mdx'

export default {
  title: 'Inputs/ Checkbox',
  component: Checkbox,
}

export const WithoutLabel = () => <Checkbox />

WithoutLabel.story = {
  name: 'Without label',
}

export const WithLabel = () => <Checkbox>With Label</Checkbox>
export const Checked = () => <Checkbox checked>With Label</Checkbox>
export const Disabled = () => <Checkbox disabled>Disabled</Checkbox>
