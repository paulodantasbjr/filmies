import styled from 'styled-components'

export const NavStyled = styled.nav`
  flex: 3;

  width: 100%;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    li {
      width: 100%;
      font-size: 2rem;
      a {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        color: ${({ theme }) => theme.colors.white};
        transition: all 0.2s ease-in;
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
      .active {
        color: ${({ theme }) => theme.colors.primary};
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: ${({ theme }) => theme.colors.primary};
          width: 1%;
          height: 100%;
        }
      }
    }
  }
`
