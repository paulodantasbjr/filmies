import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import { Profile } from './Profile'
import { Notifications } from './Notifications'
import { Search } from './Search'
import { Logo } from './Logo'
import { useSidebar } from '../../context/SidebarContext'
import { RiMenuLine } from 'react-icons/ri'

export const Header = () => {
  const { onOpen } = useSidebar()

  const isMobileVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as='header'
      h='28'
      w='100%'
      maxW={1480}
      px='6'
      mx='auto'
      align='center'
      justify='space-between'
    >
      {!isMobileVersion && (
        <IconButton
          aria-label='Open Navigation'
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        ></IconButton>
      )}

      <Logo />

      {isMobileVersion && <Search />}

      <Flex align='center'>
        <Notifications />

        <Profile isMobileVersion={isMobileVersion} />
      </Flex>
    </Flex>
  )
}
