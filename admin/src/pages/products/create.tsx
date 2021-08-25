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
  Checkbox,
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
            Criar Produto
          </Heading>

          <Divider my='6' borderColor='gray.400' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='title' label='Nome' type='text' />
              <Input name='genre' label='Genero' type='text' />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='des' label='Descricao' type='text' />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='img' label='Imagem' type='file' />
              <Input name='imgTitle' label='Imagem do Titulo' type='file' />
              <Input name='thumbnail' label='Thumbnail' type='file' />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='trailer' label='Trailer' type='file' />
              <Input name='video' label='Video' type='file' />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='year' label='Ano do lancamento' type='number' />
              <Input name='limit' label='Faixa etária' type='number' />
              <Checkbox colorScheme='purple' borderColor='gray.500'>
                Serie?
              </Checkbox>
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/products' passHref>
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
