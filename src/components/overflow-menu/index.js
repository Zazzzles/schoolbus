import React from 'react'
import Popup from '../popup'

import { Button } from "./styles"

const OverflowMenu = ({ position, options, ...otherProps }) => (
  <Popup
    closeOnSelect
    position={position || 'bottomLeft'}
    contentStyle={{padding: '.2em 2em .7em 1em'}}
    {...otherProps}
  >
    {options.map(({name, onClick, href, ...otherProps}) => href 
      ? <a key={name} href={href} {...otherProps}><Button>{name}</Button></a> 
      : <Button key={name} onClick={onClick} {...otherProps}>{name}</Button>
    )}
  </Popup>
)

export default React.memo(OverflowMenu)