import { Box, Button, HStack } from '@chakra-ui/react'

export const Pagination = () => {
  return (
    <HStack spacing='6' mt='8' justify='space-between' align='center'>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing='2'>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          colorScheme='purple'
          disabled
          _disabled={{ bg: 'purple.500', cursor: 'not-allowed' }}
        >
          1
        </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='gray.300'
          _hover={{
            bg: 'purple.200',
            color: 'white',
          }}
        >
          2
        </Button>
      </HStack>
    </HStack>
  )
}
