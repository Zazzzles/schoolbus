import React from 'react'
import { connect } from 'formik'

import PropTypes from 'prop-types'
import createDefaultInputProps from '../../utils/create-input-defaults'
import InputWrapper from '../input-wrapper'
import inputPropTypes from '../../config/input-prop-types'

import { Container, Value } from './styles'

function formikChangeHandler(formik, name, value) {
  const { values, setFieldValue } = formik
  const currentValue = values[name] || []
  const shouldRemove = currentValue.includes(value)

  return setFieldValue(
    name,
    shouldRemove ? currentValue.filter(v => v !== value) : currentValue.concat(value)
  )
}

const TypeInput = ({
  options,
  selected,
  value,
  formik,
  onToggle,
  alertText: alertTextOverride,
  name,
  ...otherProps
}) => {
  const { alertText, hasFormik, ...inputDefaults } = createDefaultInputProps({
    alertText: alertTextOverride,
    value,
    name,
    formik,
  })

  const typeValues = inputDefaults.value || value
  const selectedValues = selected || (hasFormik && formik.values[name])

  return (
    <InputWrapper alertText={alertText} {...otherProps}>
      <Container>
        {options &&
          options.map(({ label, value }) => (
            <Value
              key={value}
              selected={Array.isArray(selectedValues) && selectedValues.includes(value)}
              onClick={() =>
                onToggle ? onToggle(value) : hasFormik && formikChangeHandler(formik, name, value)
              }
              value={typeValues}
            >
              {label}
            </Value>
          ))}
      </Container>
    </InputWrapper>
  )
}

TypeInput.propTypes = {
  ...inputPropTypes,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })),
}

export default connect(TypeInput)
