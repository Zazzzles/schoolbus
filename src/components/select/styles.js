import { colors, radii, fontSizes, fonts } from '../../config/theme'

function getBackgroundColor(variant) {
  switch (variant) {
    case 'borderless':
      return colors.transparent
    case 'light':
      return colors.white
    default:
      return colors.gray.xlight
  }
}

export const styleOverride = ({ fontSize, shape, variant, hasShadow }) => ({
  indicatorSeparator: () => ({
    display: 'none',
  }),
  control: (provided, state) => {
    return {
      ...provided,
      backgroundColor: getBackgroundColor(variant),
      border: state.isDisabled && !hasShadow && variant !== 'borderless'
        ? `border: 1px solid ${colors.gray.default}`
        : 'none',
      borderColor: state.isDisabled ? colors.gray.default : null,
      fontFamily: fonts.Montserrat,
      fontSize: fontSize ? fontSizes[fontSize] : fontSizes.small,
      borderRadius: shape === 'rounded' ? radii.full : radii.small,
      boxShadow: hasShadow ? 'rgba(0, 0, 0, 0.15) 0px 0px 1em 1px' : 'none',
      padding: '0 0.8em',
      overflow: 'hidden',
      width: '100%',
      ...(variant === 'light' && {
        border: `solid 1px ${colors.gray.default}`,
      }),
    }
  },

  placeholder: () => ({
    color: colors.gray.default,
  }),
  singleValue: () => ({
    color: colors.gray.xxdark,
  }),
  indicatorsContainer: (provided, state) => ({
    display: state.isDisabled ? 'none' : 'flex',
  }),
  option: (defaultStyles, { isSelected, isFocused }) => {
    let color = colors.white
    if (isFocused) {
      color = colors.xlight
    }
    if (isSelected) {
      color = colors.gray.light
    }

    return {
      ...defaultStyles,
      fontSize: fontSizes.small,
      color: colors.black,
      backgroundColor: color,
      ':active': {
        ...defaultStyles[':active'],
        backgroundColor: colors.gray.xlight,
      },
    }
  },
})