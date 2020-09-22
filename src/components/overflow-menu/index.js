import React from 'react'
import PropTypes from 'prop-types'
import Popup from '../popup'

import { Button } from './styles'

const Link = ({ href, children, ...otherProps }) => (
  <a href={href} {...otherProps}>
    {children}
  </a>
)

const OverflowMenu = ({ position, options, NextLink, ...otherProps }) => {
  const LinkComponent = NextLink ? NextLink : Link

  return (
    <Popup
      closeOnSelect
      contentStyle={{ padding: '.5em 0' }}
      xOffset="-20px"
      yOffset="-30px"
      {...otherProps}
    >
      {options.map(({ name, onClick, href, ...otherProps }) =>
        href ? (
          <LinkComponent key={name} href={href} {...otherProps}>
            <Button>{name}</Button>
          </LinkComponent>
        ) : (
          <Button key={name} onClick={onClick} {...otherProps}>
            {name}
          </Button>
        )
      )}
    </Popup>
  )
}

OverflowMenu.displayName = 'OverflowMenu'

OverflowMenu.defaultProps = {
  position: 'bottomLeft',
  options: [],
}

OverflowMenu.propTypes = {
  ...Popup.propTypes,
  options: PropTypes.arrayOf(PropTypes.object),
}

export default React.memo(OverflowMenu)
