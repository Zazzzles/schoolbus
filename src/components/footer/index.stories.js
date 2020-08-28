import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from './'

import mdx from './index.stories.mdx'

storiesOf('Footer', module)
  .addParameters({
    component: Footer,
    docs: mdx,
  })
  .add('Basic', () => <Footer />)
  .add('Custom copyright', () => <Footer copyright="This is a custom copyright" />)
