import { Box, Button, HStack } from '@chakra-ui/react'

import { Item } from './item'

export const Pagination = () => {
  return (
    <HStack spacing='6' mt='8' justify='space-between' align='center'>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing='2'>
        <Item isCurrent number={1} />
        <Item number={2} />
        <Item number={3} />
        <Item number={4} />
      </HStack>
    </HStack>
  )
}
