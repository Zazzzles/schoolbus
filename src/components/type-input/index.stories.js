import { Formik } from 'formik'
import { storiesOf } from '@storybook/react'
import TypeInput from './'

const options = [{ label: 'option 1', value: '1' }, { label: 'option 2', value: '2' }]

storiesOf('Input/ Type Input', module)
  .addParameters({ component: TypeInput })
  .add('Basic', () => <TypeInput options={options} label="Label" name="2" />)
  .add('With Formik', () => (
    <Formik>
      <TypeInput options={options} label="Label" name="2" />
    </Formik>
  ))