import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useSidebar } from '../../context/SidebarContext'

import { Nav } from './Nav'

export const Sidebar = () => {
  const { isOpen, onClose } = useSidebar()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton mt='6' />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Nav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as='aside' w='64' mr='8'>
      <Nav />
    </Box>
  )
}
