import styled from 'styled-components'

function getVerticalOffset(props) {
  const { renderToBottom, yOffset, position } = props
  const isCentered = ['leftCenter', 'rightCenter'].includes(position)
  const offset = `calc(${isCentered ? '50%' : '100%'} + ${isCentered ? '0px' : yOffset})`

  return `${renderToBottom ? 'top:' : 'bottom:'} ${offset}`
}

function getHorizontalOffset(props) {
  const { renderToLeft, xOffset, position } = props

  const isCentered = ['bottomCenter', 'topCenter'].includes(position)
  const offset = `calc(${isCentered ? '50%' : '100%'} + ${isCentered ? '0px' : xOffset})`

  return `${renderToLeft && !isCentered ? 'right:' : 'left:'} ${offset}`
}

function getTransform(props) {
  const { showDialogue, position } = props

  const xCentered = ['bottomCenter', 'topCenter'].includes(position)
  const translateX = `translateX(${xCentered ? '-50%' : '0px'})`

  const yCentered = ['leftCenter', 'rightCenter'].includes(position)
  const translateY = `translateY(${yCentered ? '50%' : '0px'})`

  const scale = showDialogue ? 'scale(1)' : 'scale(0)'
  return `${scale} ${translateX} ${translateY}`
}

function getTransformOrigin(props) {
  const { renderToBottom, renderToLeft } = props
  const xOrigin = renderToBottom ? 'top' : 'bottom'
  const yOrigin = renderToLeft ? 'right' : 'left'

  return `${xOrigin} ${yOrigin}`
}

function getArrowPosition(props) {
  const { position, renderToBottom, renderToLeft } = props
  const arrowVertical = ['bottomCenter', 'topCenter'].includes(position)

  if (arrowVertical) {
    return `
      transform: translateX(-50%) rotate(45deg);
      left: 50%;
      ${renderToBottom ? 'top' : 'bottom'}: -5px;
    `
  }
  return `
    transform: translateY(-50%) rotate(45deg);
    top: 50%;
    ${renderToLeft ? 'right' : 'left'}: -5px;
  `
}

export const Trigger = styled.div`
  position: relative;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.transparent};
  margin: 0;
  font-size: unset;
  &:hover {
    cursor: pointer;
  }
`

export const ContentWrapper = styled.div`
  white-space: nowrap;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
  ${props => getVerticalOffset(props)};
  ${props => getHorizontalOffset(props)};
  z-index: ${({ theme }) => theme.zIndices[4]};
  transform: ${props => getTransform(props)};
  transform-origin: ${props => getTransformOrigin(props)};
  transition: 80ms transform ease-out;
  &::before {
    display: ${({ arrow }) => (arrow ? 'block' : 'none')};
    content: '';
    position: absolute;
    height: 12px;
    width: 12px;
    background-color: inherit;
    ${props => getArrowPosition(props)};
    z-index: -1;
  }
`
