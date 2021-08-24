import { Flex } from '@chakra-ui/react'

import { Profile } from './Profile'
import { Notifications } from './Notifications'
import { Search } from './Search'
import { Logo } from './Logo'

export const Header = () => {
  return (
    <Flex
      as='header'
      h='28'
      w='100%'
      maxW={1480}
      mx='auto'
      px='6'
      align='center'
    >
      <Logo />

      <Search />

      <Flex align='center' ml='auto'>
        <Notifications />

        <Profile />
      </Flex>
    </Flex>
  )
}
