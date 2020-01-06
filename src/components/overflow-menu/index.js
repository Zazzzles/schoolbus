import React from 'react'
import Popup from '../popup'

const OverflowMenu = ({ position, children }) => (

  <Popup
    position={position || 'bottomLeft'}
    contentStyle={{
      padding: '0.5em 2em 0.5em 1em'
    }}
  >
    {React.Children.forEach(children, (c) => {console.log(c)})}
    {children}
  </Popup>
)

export default OverflowMenu