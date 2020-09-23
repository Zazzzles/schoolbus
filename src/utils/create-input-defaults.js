import { errorForField } from '../utils/error-for-field'

export default function createDefaultInputProps({
  formik,
  name,
  onBlur,
  value,
  onChange,
  alertText,
}) {
  const hasFormik = formik && Object.values(formik).length > 0
  return {
    hasFormik,
    onBlur: onBlur || (hasFormik ? formik.handleBlur : undefined),
    value: value || (hasFormik ? formik.values[name] : undefined),
    onChange:
      onChange ||
      (hasFormik ? ({ target }) => formik.setFieldValue(name, target.value) : undefined),
    alertText: alertText || (hasFormik ? errorForField(formik.errors, formik.touched, name) : null),
  }
}
