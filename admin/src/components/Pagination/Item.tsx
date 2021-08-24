import { Button } from '@chakra-ui/react'

interface ItemProps {
  number: number
  isCurrent?: boolean
}

export const Item = ({ number, isCurrent }: ItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size='sm'
        fontSize='xs'
        width='4'
        colorScheme='purple'
        disabled
        _disabled={{ bg: 'purple.500', cursor: 'not-allowed' }}
      >
        {number}
      </Button>
    )
  } else {
    return (
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
        {number}
      </Button>
    )
  }
}
