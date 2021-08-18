import styled from 'styled-components'

export const ChartPieSerieStyled = styled.div`
  padding: 2rem;

  background: ${({ theme }) => theme.colors.backgroundLight};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border: 1px solid ${({ theme }) => theme.colors.grayDark};
  border-radius: 1rem;
`
