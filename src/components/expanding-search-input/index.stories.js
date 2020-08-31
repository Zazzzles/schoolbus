import React from 'react'
import { storiesOf } from '@storybook/react'
import ExpandingSearchInput from './'

const handleExpand = state => console.log(state)

storiesOf('Input/ Expanding Search Input', module)
  .addParameters({ component: ExpandingSearchInput })
  .add('Default', () => <ExpandingSearchInput label="Default" onExpand={handleExpand}/>)
