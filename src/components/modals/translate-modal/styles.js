import styled from 'styled-components'

export const Container = styled.div`
  width: 43em;
`

export const EditTextContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({theme}) => theme.fontSizes.small};
`

export const EditText = styled.div`
  color: ${({theme}) => theme.colors.gray.dark};
`

export const EditButton = styled.button`
  color: ${({theme}) => theme.colors.primary};
  font-weight: ${({theme}) => theme.fontWeights.bold};
  font-size: ${({theme}) => theme.fontSizes.medium};
  border: none;
  text-decoration: underline;
  cursor: pointer;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.8em;
`
