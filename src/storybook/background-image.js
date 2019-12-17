import React from 'react'
import { storiesOf } from '@storybook/react'
import { BackgroundImage } from '../'

storiesOf('BackgroundImage', module)
  .addParameters({ component: BackgroundImage })
  .add('Basic', () => (
    <BackgroundImage
      source="https://images.freeimages.com/images/small-previews/05e/on-the-road-6-1384796.jpg"
      size="300px"
    />
  ))
