import RadioButton from './'

export default {
  title: 'Inputs/Radio Button',
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component: 'Radio Button allows the user to choose only one of a predefined set of mutually exclusive options.'
      }
    },
  }
}


export const Base = args => <RadioButton {...args} />
Base.args = {
  checked: false,
  disabled: false,
}

export const Checked = () => <RadioButton checked />
export const CheckedDisabled = () => <RadioButton checked disabled />