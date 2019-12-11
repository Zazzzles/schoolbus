export const errorForField = (errors, touched, fieldname) => {
  if (errors[fieldname] && touched[fieldname]) {
    return errors[fieldname] || ''
  }
  return ''
}
