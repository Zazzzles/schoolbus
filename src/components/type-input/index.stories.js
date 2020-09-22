import TypeInput from './'
import defaultInputArgs from '../../config/default-input-args'

const options = [
  { label: 'option 1', value: '1' },
  { label: 'option 2', value: '2' },
]

export default {
  title: 'Inputs/ Type Input',
  component: TypeInput,
  parameters: {
    formik: {
      initialValues: { name: [options[0]] },
    },
    docs: {
      description: {
        component:
          'An input that allows you to select from a number of `Pill`\'s, passed through as `options`.',
      },
    },
  },
}

export const Base = args => <TypeInput {...args} />
Base.args = { ...defaultInputArgs, options }
delete Base.args.placeholder

export const Disabled = () => <TypeInput {...defaultInputArgs} options={options} disabled />
export const Invalid = () => (
  <TypeInput {...defaultInputArgs} options={options} alertText="Invalid" />
)
