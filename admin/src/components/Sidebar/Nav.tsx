import { Stack } from '@chakra-ui/react'
import { RiDashboardLine } from 'react-icons/ri'
import { FiUser, FiUsers } from 'react-icons/fi'
import { MdLocalMovies, MdMovieCreation } from 'react-icons/md'

import { LinkNav } from './LinkNav'
import { Section } from './Section'

export const Nav = () => {
  return (
    <Stack spacing='12' align='flex-start'>
      <Section title='GERAL'>
        <LinkNav href='/' icon={RiDashboardLine}>
          Dashboard
        </LinkNav>
      </Section>
      <Section title='USER'>
        <LinkNav href='/users' icon={FiUsers}>
          Lista Usuario
        </LinkNav>
        <LinkNav href='/users/create' icon={FiUser}>
          Cadastro Usuario
        </LinkNav>
      </Section>
      <Section title='PRODUTO'>
        <LinkNav href='/products' icon={MdLocalMovies}>
          Lista Produto
        </LinkNav>
        <LinkNav href='/products/create' icon={MdMovieCreation}>
          Cadastro Produto
        </LinkNav>
      </Section>
    </Stack>
  )
}
