import styled from 'styled-components'

const Spinner = styled.div`
  display: ${props => props.show};
  border-radius: 50%;
  width: ${({ size }) => size || '60px'};
  height: ${({ size }) => size || '60px'};
  color: ${({ color, theme }) => color || theme.colors.primary};
  border: ${({ width }) => width || '5px'} solid ${({ theme, color }) => color || theme.colors.primary};
  box-sizing: border-box;
  animation: sweep 1s linear alternate infinite, rota 0.8s linear infinite;
  margin: ${({ margin }) => margin || 0};

  @keyframes rota {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes sweep {
    0% {
      clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
    }
    50% {
      clip-path: polygon(
        0% 0%,
        0% 100%,
        0% 100%,
        50% 50%,
        100% 0%,
        100% 0%,
        0% 0%
      );
    }
    100% {
      clip-path: polygon(
        0% 0%,
        0% 100%,
        100% 100%,
        50% 50%,
        100% 100%,
        100% 0%,
        0% 0%
      );
    }
  }
`

export default Spinner
