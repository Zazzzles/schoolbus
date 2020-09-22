import styled from 'styled-components'

export const Container = styled.div`
  min-height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .rc-slider {
    margin: 0 1em;
  }

  & .rc-slider-handle {
    background-color: ${({ theme }) => theme.colors.primary};
    border: solid 2px ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0.4em 0 rgba(0, 0, 0, 0.3);
  }

  & .rc-slider-track {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  & .rc-slider-disabled {
    background: transparent;
  }
`

export const Value = styled.div`
  width: 3.5em;
  text-align: center;
`
