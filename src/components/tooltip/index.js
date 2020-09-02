import ReactTooltip from 'react-tooltip'

const Tooltip = ({ text, children }) => (
  <div>
    <ReactTooltip />
    <div data-tip={text}>{children}</div>
  </div>
)

export default Tooltip
