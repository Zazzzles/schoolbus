import React, { PureComponent } from 'react'
import theme from '../theme'
import { Button, Badge } from './styles'
import PropTypes from 'prop-types'

class IconButton extends PureComponent {

  static propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    iconColor: PropTypes.string,
    children: PropTypes.node,
    badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    noShadow: PropTypes.bool
  }

  static defaultProps = {
    icon: 'Plus',
    size: 'medium',
    color: 'primary',
    noShadow: false,
    onClick: () => {}
  }

  iconTypes = {
    add: 'Plus',
    filter: 'FilterVariant',
    translate: 'Translate',
    download: 'Download',
    back: 'ArrowLeft',
    search: 'Magnify',
    edit: 'Pencil',
    fullscreen: 'Fullscreen',
    delete: 'Delete',
    tune: 'Tune',
    overflow: 'DotsVertical',
    phone: 'Phone',
    email: 'Email'
  }

  iconSizes = {
    xsmall: 18,
    small: 20,
    medium: 22,
    large: 24,
    xlarge: 26
  }

  state = {
    IconComponent: null
  }

  componentDidMount() {
    const { icon, children } = this.props
    if (children) return

    const iconName = Object.keys(this.iconTypes).includes(icon)
      ? this.iconTypes[icon]
      : icon

    import(`@lessondesk/material-icons/dist/${iconName}`)
      .then(module => {
        if (!module) return
        this.setState({ IconComponent: module.default })
      })
  }

  getIconColor = () => {
    const { iconColor, color } = this.props
    const { colors } = theme

    if (iconColor) {
      if (Object.keys(colors).includes(iconColor)) {
        const selectedColor = colors[iconColor]
        return Array.isArray(selectedColor) ? selectedColor[2] : selectedColor
      }
      return iconColor
    }

    return color === 'primary' ? colors.white : colors.gray.xdark
  }

  renderIcon = () => {
    const { IconComponent } = this.state

    const { iconStyle, size } = this.props
    const iconProps = {
      color: this.getIconColor(),
      size: this.iconSizes[size]
    }

    return IconComponent
      ? <IconComponent {...iconProps} style={iconStyle} />
      : null
  }

  render() {
    const {
      badge,
      children,
      ...otherProps
    } = this.props

    return (
      <Button
        badge={badge}
        {...otherProps}
      >
        {badge > 0 && <Badge>{badge}</Badge>}
        {children || this.renderIcon()}
      </Button>
    )
  }
}

export default IconButton
