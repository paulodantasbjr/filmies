import { Flex, Text, Input, HStack, Box, Avatar } from '@chakra-ui/react'
import { SearchIcon, BellIcon, EditIcon } from '@chakra-ui/icons'

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
      <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight'>
        Admin
      </Text>

      <Flex
        as='label'
        position='relative'
        flex='1'
        py='3'
        px='2'
        ml='6'
        maxW='400px'
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
        <SearchIcon fontSize='20' ml='2' mr='2' />
      </Flex>

      <Flex align='center' ml='auto'>
        <HStack
          spacing='8'
          mx='8'
          pr='8'
          py='1'
          color='gray.500'
          borderRightWidth={1}
          borderColor='gray.500'
        >
          <BellIcon fontSize='20' />
          <EditIcon fontSize='20' />
        </HStack>

        <Flex align='center'>
          <Box mr='4' textAlign='right'>
            <Text>Paulo Dantas</Text>
            <Text color='gray.300'>paulorobertosjm@gmail.com</Text>
          </Box>
          <Avatar
            size='md'
            name='Paulo Dantas'
            src='https://github.com/paulodantasrj.png'
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
