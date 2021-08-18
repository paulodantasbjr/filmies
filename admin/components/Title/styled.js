import styled from 'styled-components'

export const TitleStyled = styled.h2`
  text-transform: capitalize;
  font-size: 4rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
`
