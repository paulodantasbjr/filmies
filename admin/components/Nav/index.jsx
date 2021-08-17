import Link from 'next/link'
import { useRouter } from 'next/router'

import { FaHome, FaUsers, FaPlay } from 'react-icons/fa'
import { IoStatsChart, IoSettings } from 'react-icons/io5'

import { NavStyled } from './styled'

export const Nav = () => {
  const router = useRouter()
  return (
    <NavStyled>
      <ul>
        <li>
          <Link href='/'>
            <a className={router.pathname == '/' ? 'active' : ''}>
              <FaHome />
            </a>
          </Link>
        </li>
        <li>
          <Link href='/users'>
            <a className={router.pathname == '/users' ? 'active' : ''}>
              <FaUsers />
            </a>
          </Link>
        </li>
        <li>
          <Link href='/movies'>
            <a className={router.pathname == '/movies' ? 'active' : ''}>
              <FaPlay />
            </a>
          </Link>
        </li>
        <li>
          <Link href='/stats'>
            <a className={router.pathname == '/stats' ? 'active' : ''}>
              <IoStatsChart />
            </a>
          </Link>
        </li>
        <li>
          <Link href='/settings'>
            <a className={router.pathname == '/settings' ? 'active' : ''}>
              <IoSettings />
            </a>
          </Link>
        </li>
      </ul>
    </NavStyled>
  )
}
