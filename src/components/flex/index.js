import styled from 'styled-components'

import {
  space,
  layout,
  color,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
} from 'styled-system'

import theme from '../../config/theme'
import { mapProps } from '../../utils/map-props'

const Flex = mapProps(({ wrap, align, justify, ...otherProps }) => ({
  flexWrap: wrap ? 'wrap' : 'no-wrap',
  alignItems: align,
  justifyContent: justify,
  ...otherProps,
}))(styled.div`
  display: flex;
  ${space}
  ${layout}
  ${color}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`)

Flex.defaultProps = {
  theme,
}

Flex.propTypes = {
  ...space.propTypes,
  ...layout.propTypes,
  ...color.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
}

Flex.displayName = 'Flex'

export default Flex
