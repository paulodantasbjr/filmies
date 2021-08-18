import styled from 'styled-components'

export const LayoutStyled = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`

export const SidebarStyled = styled.header`
  width: 8%;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-right: 1px solid ${({ theme }) => theme.colors.grayDark};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const MainStyled = styled.main`
  width: 92%;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.background};
  padding: 3rem;
`
