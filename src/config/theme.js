const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      },
    })
  )

export const space = [0, '0.25em', '0.5em', '1em', '2em', '4em', '8em', '16em', '32em']

export const fontSizes = [
  '0.5em',
  '0.625em',
  '0.75em',
  '0.875em',
  '1em',
  '1.25em',
  '1.5em',
  '2em',
  '3em',
  '4em',
  '5em',
]
export const fontSizeAliases = [
  'xxxsmall',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
]
addAliases(fontSizes, fontSizeAliases)

export const colors = {
  white: '#fff',
  gray: ['#F8F8F8', '#f1f1f1', '#dadada', '#a8a8a8', '#7f7f7f', '#5f6163', '#47494b', '#2e2e2e'],
  black: '#212325',
  transparent: 'transparent',
  blue: ['#80dcff', '#4dceff', '#00abeb', '#0082b3', '#005d80'],
  green: ['#F9FFF4', '#85E2A2', '#37b049', '#65D287'],
  red: ['#FFF5F5', '#f6bdbb', '#ed7470', '#e53933', '#9f1814', '#71110e', '#FB7D7D'],
  yellow: '#f8b31c',
  orange: ['#fff8eb', '#ffa400'],
  answerColors: ['#F15152', '#3480EE', '#1E9E2F', '#FFA400'],
}

colors.primary = colors.orange[1]
const orangeColorAliases = ['primaryLight', 'primary']
addAliases(colors.orange, orangeColorAliases)

const grayColorAliases = [
  'xxxlight',
  'xxlight',
  'xlight',
  'light',
  'default',
  'dark',
  'xdark',
  'xxdark',
]
addAliases(colors.gray, grayColorAliases)

const fallbackFontStack = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`
export const fonts = ['Montserrat', 'Open Sans'].map(font => `${font}, ${fallbackFontStack}`)
const fontsAliases = ['Montserrat', 'OpenSans']
addAliases(fonts, fontsAliases)

export const fontWeights = [100, 200, 300, 400, 500, 600, 700]
export const fontWeightsAliases = [
  'hairline',
  'thin',
  'light',
  'medium',
  'semi',
  'bold',
  'extrabold',
]
addAliases(fontWeights, fontWeightsAliases)

export const lineHeights = [1.0, 1.25, 1.375, 1.5, 1.625, 2.0]
export const lineHeightsAliases = ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose']
addAliases(lineHeights, lineHeightsAliases)

export const letterSpacings = ['-0.05em', '-0.025em', '0', '0.025em', '0.05em', '0.1em']
export const letterSpacingsAliases = ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest']
addAliases(letterSpacings, letterSpacingsAliases)
const shadowColor = 'rgba(0, 0, 0, 0.12)'
const baseShadow = '0 0 2px 0 rgba(0,0,0,.0625),'
export const shadows = [
  `${baseShadow}0 2px 4px 0 ${shadowColor}`,
  `${baseShadow}0 4px 8px 0 ${shadowColor}`,
  `${baseShadow}0 12px 12px 0 ${shadowColor}`,
  `${baseShadow}0 24px 24px 0 ${shadowColor}`,
  `${baseShadow}0 0 20px 0 rgba(0,0,0,.05)`,
]

export const radii = [0, '2px', '5px', '10px', '15px', '20px', '30px', '9999px']
export const radiiAliases = [
  'none',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'full',
]
addAliases(radii, radiiAliases)

export const zIndices = [1, 2, 3, 4, 5]

export const breakpoints = ['320px', '640px', '832px', '1024px', '1280px']
export const mediaQueries = breakpoints.map(val => `@media screen and (min-width: ${val})`)
export const mediaQueriesAliases = ['xsmall', 'small', 'medium', 'large', 'xlarge']
addAliases(mediaQueries, mediaQueriesAliases)
addAliases(breakpoints, mediaQueriesAliases)

const buttons = {
  primary: {
    color: colors.white,
    backgroundColor: colors.orange[1],
    boxShadow: shadows[2],
    fontWeight: fontWeights[5],
  },
  secondary: {
    color: colors.white,
    backgroundColor: colors.gray[2],
    boxShadow: shadows[2],
    fontWeight: fontWeights[5],
  },
  tertiary: {
    color: colors.gray[4],
    backgroundColor: colors.white,
    boxShadow: shadows[2],
    fontWeight: fontWeights[5],
  },
  minimal: {
    color: colors.orange[1],
    backgroundColor: colors.transparent,
    fontWeight: fontWeights[5],
  },
  danger: {
    color: colors.white,
    backgroundColor: colors.red[2],
    boxShadow: shadows[2],
    fontWeight: fontWeights[5],
  },
}

const theme = {
  space,
  fontSizes,
  colors,
  fonts,
  fontWeights,
  lineHeights,
  letterSpacings,
  shadows,
  radii,
  zIndices,
  breakpoints,
  mediaQueries,
  buttons,
}

export default theme
