import styled from 'styled-components'

export const LayoutStyled = styled.div`
  width: 100%;

  display: flex;
`

export const SidebarStyled = styled.header`
  width: 8%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

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

  position: absolute;
  top: 0;
  left: 8%;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.background};
  padding: 3rem;
`
