import React, { useState, useEffect } from 'react'
import theme from '../../config/theme'
import { Button, Badge } from './styles'
import Flex from '../flex'
import PropTypes from 'prop-types'

const ICON_SIZES = {
  xsmall: 18,
  small: 20,
  medium: 22,
  large: 24,
  xlarge: 26
}

const VARIANTS = {
  primary: {
    color: 'primary',
    iconColor: 'white'
  },
  secondary: {
    color: 'gray.xxlight',
    iconColor: 'gray.xdark'
  },
  light: {
    color: 'white',
    iconColor: 'gray.default'
  },
  clear: {
    color: 'transparent',
    iconColor: 'gray.default',
    noShadow: true
  },
  danger: {
    color: theme.colors.red[2],
    iconColor: 'white'
  },
}

const IconButton = ({ variant, ...props }) => {
  const { 
    icon,
    badge,
    children,
    size,
    color,
    iconColor,
    ...otherProps
  } = { ...props, ...VARIANTS[variant] }
  const [iconModule, setIcon] = useState(null)
  const importIcon = async () => setIcon(await import(`@lessondesk/material-icons/dist/${icon}`))
  useEffect(() => { 
    if (icon) importIcon() 
    else setIcon(null)
  }, [icon])
  const iconComponent = iconModule?.default && iconModule.default({ 
    size: size ? ICON_SIZES[size] || size : ICON_SIZES.medium, 
    color: iconColor
  })

  return (
    <Button
      alignItems='center'
      justifyContent='center'
      theme={theme}
      badge={badge}
      size={size}
      color={color}
      {...otherProps}
    >
      {badge > 0 && <Badge>{badge}</Badge>}
      {children || iconComponent}
    </Button>
  )
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  iconColor: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  noShadow: PropTypes.bool,
  ...Flex.propTypes
}

IconButton.defaultProps = {
  icon: 'Plus',
  size: 'medium',
  color: 'primary',
  iconColor: 'white',
  noShadow: false,
  iconStyle: {}
}

export default IconButton
