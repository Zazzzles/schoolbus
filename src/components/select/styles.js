import { colors, radii, fontSizes, fonts, fontWeights } from '../../config/theme'

function getBackgroundColor(variant) {
  switch (variant) {
    case 'borderless':
      return colors.transparent
    case 'light':
      return colors.white
    default:
      return colors.gray.xxlight
  }
}

export const styleOverride = ({ fontSize, shape, variant, hasShadow, disabled }) => ({
  indicatorSeparator: () => ({
    display: 'none',
  }),
  control: (provided, state) => {
    return {
      ...provided,
      color: colors.gray.xdark,
      backgroundColor: disabled ? colors.white : getBackgroundColor(variant),
      border: state.isDisabled && !hasShadow && variant !== 'borderless'
        ? `border: 1px solid ${colors.gray.xlight}`
        : 'none',
      borderColor: state.isDisabled ? colors.gray.xlight : null,
      fontFamily: fonts.Montserrat,
      fontSize: fontSize ? fontSizes[fontSize] : fontSizes.small,
      borderRadius: shape === 'rounded' ? radii.full : radii.small,
      boxShadow: hasShadow ? 'rgba(0, 0, 0, 0.15) 0px 0px 1em 1px' : 'none',
      padding: '0 0.8em',
      overflow: 'hidden',
      width: '100%',
      ...(variant === 'light' && {
        border: `solid 1px ${colors.gray.xxlight}`,
      }),
      fontWeight: fontWeights[shape === 'rounded' ? 'semi' : 'normal']
    }
  },

  placeholder: () => ({
    color: colors.gray.light,
  }),
  singleValue: () => ({
    color: colors.gray.xdark,
  }),
  indicatorsContainer: (provided, state) => ({
    display: state.isDisabled ? 'none' : 'flex',
  }),
  option: (defaultStyles, { isSelected, isFocused }) => {
    let color = colors.white
    if (isFocused) {
      color = colors.gray.xxlight
    }
    if (isSelected) {
      color = colors.gray.xxlight
    }

    return {
      ...defaultStyles,
      fontSize: fontSizes.small,
      color: colors.gray.xdark,
      backgroundColor: color,
      ':active': {
        ...defaultStyles[':active'],
        backgroundColor: colors.gray.xlight,
      },
    }
  },
})