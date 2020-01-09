import styled from 'styled-components'

export const Trigger = styled.div`
  position: relative;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.transparent};
  margin: 0;
`

export const ContentWrapper = styled.div`
  white-space: nowrap;
  transform: ${({ showDialogue }) => showDialogue ? 'scale(1)' : 'scale(0)'};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
  ${({ renderToBottom, yOffset }) => `${renderToBottom ? 'top:' : 'bottom:'} calc(100% + ${yOffset})`};
  ${({ renderToLeft, xOffset }) => `${renderToLeft ? 'right:' : 'left:'} calc(100% + ${xOffset})`};
  z-index: ${({ theme }) => theme.zIndices[4]};
  overflow: "hidden";
`