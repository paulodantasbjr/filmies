import { Box, Stack } from '@chakra-ui/react'
import { RiDashboardLine } from 'react-icons/ri'

import { Section } from './Section'
import { Link } from './Link'

export const Sidebar = () => {
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <Section title='GERAL'>
          <Link icon={RiDashboardLine}>Dashboard</Link>
        </Section>
      </Stack>
    </Box>
  )
}
