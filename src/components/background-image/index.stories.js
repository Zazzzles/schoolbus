import React from 'react'
import BackgroundImage from './'

export default {
  title: 'Misc/BackgroundImage',
  component: BackgroundImage,
}

export const Base = args => <BackgroundImage {...args} />
Base.args = {
  src: 'https://images.freeimages.com/images/small-previews/05e/on-the-road-6-1384796.jpg',
  size: '300px',
}
