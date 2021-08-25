import { Stack } from '@chakra-ui/react'
import { RiDashboardLine } from 'react-icons/ri'

import { Link } from './Link'
import { Section } from './Section'

export const Nav = () => {
  return (
    <Stack spacing='12' align='flex-start'>
      <Section title='GERAL'>
        <Link icon={RiDashboardLine}>Dashboard</Link>
      </Section>
    </Stack>
  )
}
