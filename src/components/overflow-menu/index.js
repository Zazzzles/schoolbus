import React from 'react'
import Popup from '../popup'

import { Button } from "./styles"

const OverflowMenu = ({ position, options, Link, ...otherProps }) => {
  return (
    <Popup
      closeOnSelect
      position={position}
      contentStyle={{ padding: '.2em 2em .7em 1em' }}
      xOffset="-20px"
      yOffset="-30px"
      {...otherProps}
    >
      {options.map(({ name, onClick, href, ...otherProps }) => href
        ? <a key={name} href={href} {...otherProps}><Button>{name}</Button></a>
        : <Button key={name} onClick={onClick} {...otherProps}>{name}</Button>
      )}
    </Popup>
  )
}

OverflowMenu.defaultProps = {
  position: 'bottomLeft',
  options: []
}


export default React.memo(OverflowMenu)