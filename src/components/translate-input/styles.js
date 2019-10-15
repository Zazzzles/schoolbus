import styled from 'styled-components'

import StyledInput from '../styled-input'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const TranslateIconContainer = styled.div`
  position: absolute;
  right: 0.8em;
  cursor: pointer;
  line-height: 0;
`

export const TranslateInputContainer = styled(StyledInput)`
  padding-right: 3em;
`
