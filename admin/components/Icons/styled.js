import styled from 'styled-components'

export const IconStyled = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
  }
`
