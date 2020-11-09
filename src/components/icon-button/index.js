import React, { useState, useEffect } from 'react'
import theme from '../../config/theme'
import { Button, Badge } from './styles'
import Flex from '../flex'
import PropTypes from 'prop-types'

import Eye from '@lessondesk/material-icons/dist/Eye'
import DotsVertical from '@lessondesk/material-icons/dist/DotsVertical'
import FilterVariant from '@lessondesk/material-icons/dist/FilterVariant'
import Download from '@lessondesk/material-icons/dist/Download'
import Pen from '@lessondesk/material-icons/dist/Pen'
import Plus from '@lessondesk/material-icons/dist/Plus'
import Close from '@lessondesk/material-icons/dist/Close'
import Link from '@lessondesk/material-icons/dist/Link'
import Pencil from '@lessondesk/material-icons/dist/Pencil'
import Tune from '@lessondesk/material-icons/dist/Tune'
import Delete from '@lessondesk/material-icons/dist/Delete'
import ArrowLeft from '@lessondesk/material-icons/dist/ArrowLeft'
import Phone from '@lessondesk/material-icons/dist/Phone'
import Email from '@lessondesk/material-icons/dist/Email'
import Magnify from '@lessondesk/material-icons/dist/Magnify'
import FormatLineSpacing from '@lessondesk/material-icons/dist/FormatLineSpacing'
import ChevronLeft from '@lessondesk/material-icons/dist/ChevronLeft'
import ChevronRight from '@lessondesk/material-icons/dist/ChevronRight'

const ICON_SIZES = {
  xsmall: 18,
  small: 20,
  medium: 22,
  large: 24,
  xlarge: 26,
}

const BUTTON_SIZES = {
  xsmall: '28px',
  small: '32px',
  medium: '38px',
  large: '44px',
  xlarge: '48px',
}

const VARIANTS = {
  primary: {
    color: 'primary',
    iconColor: 'white',
  },
  secondary: {
    color: 'gray.xxlight',
    iconColor: 'gray.xdark',
  },
  light: {
    color: 'white',
    iconColor: 'gray.default',
  },
  clear: {
    color: 'transparent',
    iconColor: 'gray.default',
    noShadow: true,
  },
  danger: {
    color: theme.colors.red[2],
    iconColor: 'white',
  },
}

const ICON_MAP = {
  Eye,
  DotsVertical,
  FilterVariant,
  Download,
  Pen,
  Plus,
  Close,
  Link,
  Pencil,
  Tune,
  Delete,
  ArrowLeft,
  Phone,
  Email,
  Magnify,
  FormatLineSpacing,
  ChevronLeft,
  ChevronRight,
}

const IconButton = ({ variant, ...props }) => {
  const { icon, badge, children, size, color, iconColor, ...otherProps } = {
    ...props,
    ...VARIANTS[variant],
  }
  // const [iconModule, setIcon] = useState(null)
  // const importIcon = async () => setIcon(await import(`./available-icons/material-icons/dist/${icon}`))
  // useEffect(() => {
  //   if (icon) importIcon()
  //   else setIcon(null)
  // }, [icon])

  // const iconComponent = iconModule?.default && iconModule.default({
  //   size: size ? ICON_SIZES[size] || size : ICON_SIZES.medium,
  //   color: iconColor
  // })
  const Icon = ICON_MAP[icon]

  return (
    <Button
      alignItems="center"
      justifyContent="center"
      badge={badge}
      size={BUTTON_SIZES[size] || size}
      backgroundColor={theme.colors?.[color] || color}
      {...otherProps}
    >
      {badge > 0 && <Badge>{badge}</Badge>}
      {children || <Icon size={ICON_SIZES[size]} color={iconColor} />}
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
  ...Flex.propTypes,
}

IconButton.defaultProps = {
  icon: 'Plus',
  size: 'medium',
  color: 'primary',
  iconColor: 'white',
  noShadow: false,
  iconStyle: {},
}

export default IconButton
