import styled from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  position: relative;
`

export const Trigger = styled.div`
  position: relative;
  display: inline-block;
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
  ${({ renderToBottom }) => renderToBottom ? 'top: 110%;' : 'bottom: 110%;'}
  ${({ renderToLeft }) => renderToLeft ? 'right: 50%;' : 'left: 50%;'}
  z-index: ${({ theme }) => theme.zIndices[4]};
`