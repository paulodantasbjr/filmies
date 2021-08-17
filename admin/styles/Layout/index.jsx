import { LayoutStyled, MainStyled, SidebarStyled } from './styled'
import { Logo } from '../../components/Logo'
import { Nav } from '../../components/Nav'
import { Options } from '../../components/Options'

export const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <SidebarStyled>
        <Logo />
        <Nav />
        <Options />
      </SidebarStyled>
      <MainStyled>{children}</MainStyled>
    </LayoutStyled>
  )
}
