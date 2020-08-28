import React from 'react'
import { storiesOf } from '@storybook/react'
import Image from './'

const imageUrl = "https://images.freeimages.com/images/small-previews/05e/on-the-road-6-1384796.jpg"

storiesOf('Image', module)
  .addParameters({ component: Image })
  .add('Basic', () => (
    <Image src={imageUrl} size="300px" />
  ))
  .add('Rounded', () => (
    <Image
      shape="rounded"
      src={imageUrl}
      size="300px"
    />
  ))
  .add('Round', () => (
    <Image
      shape="round"
      src={imageUrl}
      size="300px"
    />
  ))
  .add('Shadow', () => (
    <Image
      shape="round"
      boxShadow={3}
      src={imageUrl}
      size="300px"
    />
  ))
