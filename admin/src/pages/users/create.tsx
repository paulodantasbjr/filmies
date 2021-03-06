import Link from 'next/link'
import {
  Box,
  Flex,
  Divider,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react'

import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} p={['6', '8']} bg='gray.200'>
          <Heading size='lg' fontWeight='normal'>
            Criar usuario
          </Heading>

          <Divider my='6' borderColor='gray.400' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='name' label='Nome completo' />
              <Input name='email' label='E-mail' type='email' />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='password' label='Senha' type='password' />
              <Input
                name='cf_password'
                label='Confirmacao da senha'
                type='password'
              />
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button as='a' colorScheme='blackAlpha'>
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme='purple'>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
