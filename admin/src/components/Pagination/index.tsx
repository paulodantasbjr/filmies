import { Box, Stack } from '@chakra-ui/react'

import { Item } from './Item'

export const Pagination = () => {
  return (
    <Stack
      direction={['column', 'row']}
      spacing='6'
      mt='8'
      justify='space-between'
      align='center'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        <Item isCurrent number={1} />
        <Item number={2} />
        <Item number={3} />
        <Item number={4} />
      </Stack>
    </Stack>
  )
}
