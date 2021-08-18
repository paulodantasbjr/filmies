import Link from 'next/link'
import { IoNotifications } from 'react-icons/io5'

import { IconStyled } from './styled'

export const Icons = () => {
  return (
    <IconStyled>
      <Link href=''>
        <a>
          <IoNotifications />
        </a>
      </Link>
    </IconStyled>
  )
}
