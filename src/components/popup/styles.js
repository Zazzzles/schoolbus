import styled from 'styled-components'

export const Trigger = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.transparent};
  margin: 0;
`

export const MenuWrapper = styled.div`
  transform: ${({ showDialogue }) => showDialogue ? 'scale(1)' : 'scale(0)'};
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: 0 0 10px 2px rgba(0,0,0,.2)};
  ${({ renderToBottom }) => renderToBottom ? 'top: 100%;' : 'bottom: 100%;'}
  ${({ renderToLeft }) => renderToLeft ? 'right: 50%;' : 'left: 50%;'}
`