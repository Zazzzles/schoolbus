import * as React from 'react'
import hoistStatics from 'hoist-non-react-statics'

export const mapProps = map => Component =>
  hoistStatics(props => <Component {...map(props)} />, Component)

export const errorForField = (errors, touched, fieldname) => {
  if (errors[fieldname] && touched[fieldname]) {
    if (Array.isArray(errors[fieldname]) && errors[fieldname].length > 0) {
      return errors[fieldname][0].value || errors[fieldname][0]
    }

    return errors[fieldname] || ''
  }

  return ''
}
