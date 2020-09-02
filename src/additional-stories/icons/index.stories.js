import Alert from '@lessondesk/material-icons/dist/Alert'

const description = `
Material icons as react components.

## Usage
\`\`\`
import Alert from '@lessondesk/material-icons/dist/Alert'

<Alert size='5em' color='#FFA400' />
\`\`\`
`


export default {
  title: 'Misc/ Icons',
  component: Image,
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  }
}

export const Base = (args) => <Alert {...args} />
Base.args = {
  size: '5em',
  color: '#FFA400'
}
