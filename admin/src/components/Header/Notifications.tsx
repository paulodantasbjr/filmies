import { HStack, Icon } from '@chakra-ui/react'
import { FiBell } from 'react-icons/fi'

export const Notifications = () => {
  return (
    <HStack
      spacing='8'
      mx='8'
      pr='8'
      py='1'
      color='gray.500'
      borderRightWidth={1}
      borderColor='gray.500'
    >
      <Icon as={FiBell} fontSize='20' />
    </HStack>
  )
}
