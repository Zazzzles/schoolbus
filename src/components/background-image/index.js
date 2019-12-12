import styled from 'styled-components'
import PropTypes from 'prop-types'

import { background, space, layout, flexbox } from 'styled-system'

import theme from '../../config/theme'

const image = ({source}) => `url(${source})`

const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${image};
  ${space}
  ${background}
  ${layout}
  ${flexbox}
`

BackgroundImage.defaultProps = {
  theme
}

BackgroundImage.propTypes = {
  source: PropTypes.string.isRequired,
  ...space.propTypes,
  ...background.propTypes,
  ...layout.propTypes,
  ...flexbox.propTypes,
}

BackgroundImage.displayName = 'BackgroundImage'

export default BackgroundImage
