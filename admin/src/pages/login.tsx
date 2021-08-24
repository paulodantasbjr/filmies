import { Flex, Button, Stack } from '@chakra-ui/react'

import { Input } from '../components/Form/Input'

export default function Login() {
  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        w='100%'
        maxW='360px'
        bg='gray.200'
        p='8'
        borderRadius='lg'
        flexDir='column'
      >
        <Stack spacing='6'>
          <Input name='email' label='Email' type='email' />

          <Input name='password' label='Senha' type='password' />

          <Button type='submit' colorScheme='purple' size='lg'>
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
