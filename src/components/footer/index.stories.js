import React from 'react'

import Footer from './'

import mdx from './index.stories.mdx'

export default {
  title: 'Footer',
  component: Footer,
}

export const Basic = () => <Footer />
export const CustomCopyright = () => <Footer copyright='This is a custom copyright' />

CustomCopyright.story = {
  name: 'Custom copyright',
}
