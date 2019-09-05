import * as React from 'react'
import hoistStatics from 'hoist-non-react-statics'

export const mapProps = map => Component =>
  hoistStatics(props => <Component {...map(props)} />, Component)

export const errorForField = (errors, touched, fieldname) => {
  if (errors[fieldname] && touched[fieldname]) {
    return errors[fieldname] || ''
  }

  return ''
}
