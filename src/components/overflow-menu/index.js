import React from 'react'
import Popup from '../popup'

import { Button } from "./styles"

const Link = ({href, children, ...otherProps}) => (
  <a href={href} {...otherProps}>{children}</a>
)

const OverflowMenu = ({ position, options, NextLink, ...otherProps }) => {

  const LinkComponent = NextLink ? NextLink : Link

  return (
    <Popup
      closeOnSelect
      position={position}
      contentStyle={{ padding: '.5em 0' }}
      xOffset="-20px"
      yOffset="-30px"
      {...otherProps}
    >
      {options.map(({ name, onClick, href, ...otherProps }) => href
        ? <LinkComponent key={name} href={href} {...otherProps}><Button>{name}</Button></LinkComponent>
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
