import PropTypes from 'prop-types'
import { layout, space } from 'styled-system'

export default {
  formik: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  alertText: PropTypes.string,
  inputStyles: PropTypes.object,
  ...layout.propTypes,
  ...space.propTypes,
}
