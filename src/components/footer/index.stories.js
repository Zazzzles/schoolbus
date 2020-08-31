import React from 'react'

import Footer from './'

export default {
  title: 'Misc/ Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: 'Footer '
      }
    }
  }
}

export const Base = (args) => <Footer {...args} />
Base.args = {
  copyright: 'Copyright here '
}
export const FooterWithoutCopyright = () => <Footer />