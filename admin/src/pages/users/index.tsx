import {
  Box,
  Flex,
  Heading,
  Button,
  Checkbox,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tfoot,
  Icon,
} from '@chakra-ui/react'
import { RiEditFill, RiAddFill } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} p='8' bg='gray.200'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuarios
            </Heading>
            <Button
              as='a'
              size='sm'
              colorScheme='purple'
              leftIcon={<Icon as={RiAddFill} />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>
                  <Checkbox colorScheme='purple' borderColor='gray.500' />
                </Th>
                <Th>Usuarios</Th>
                <Th>Tipo</Th>
                <Th>Data de cadastro</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme='purple' borderColor='gray.500' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Paulo Dantas</Text>
                    <Text fontSize='sm' color='gray.400'>
                      paulorobertosjm@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>Administrador</Td>
                <Td>24 de Agosto, 2021</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    colorScheme='purple'
                    leftIcon={<Icon as={RiEditFill} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Total</Th>
                <Th>1</Th>
              </Tr>
            </Tfoot>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
