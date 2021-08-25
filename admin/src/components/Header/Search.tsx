import { Flex, Icon, Input } from '@chakra-ui/react'
import { RiSearch2Line } from 'react-icons/ri'

export const Search = () => {
  return (
    <Flex
      position='relative'
      py='3'
      px='2'
      ml='6'
      flex='1'
      maxW='500px'
      bg='gray.200'
      borderRadius='full'
    >
      <Input
        color='gray.400'
        variant='unstyled'
        px='4'
        placeholder='Buscar na plataforma'
        _placeholder={{ color: 'gray.400' }}
      />
      <Icon as={RiSearch2Line} fontSize='20' ml='2' mr='2' />
    </Flex>
  )
}
