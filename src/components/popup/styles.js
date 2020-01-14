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
  const offset = `calc(${isCentered ? '50%' : '100%'} + ${ isCentered ? '0px' : xOffset })`

  return `${renderToLeft ? 'right:' : 'left:'} ${offset}`
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
  const { position, renderToBottom, renderToLeft } = props 

  const xOrigin = renderToBottom ? 'top' : 'bottom'
  const yOrigin = renderToLeft ? 'right' : 'left'

  return `${xOrigin} ${yOrigin}`
}

export const Trigger = styled.div`
  position: relative;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.transparent};
  margin: 0;
`

export const ContentWrapper = styled.div`
  white-space: nowrap;
  transform: ${props => getTransform(props)};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
  ${props => getVerticalOffset(props)};
  ${props => getHorizontalOffset(props)};
  z-index: ${({ theme }) => theme.zIndices[4]};
  overflow: "hidden";
  transition: 100ms ease-out;
  transform-origin: ${props => getTransformOrigin(props)};
`