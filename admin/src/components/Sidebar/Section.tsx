import { ReactNode } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'

interface SectionProps {
  children: ReactNode
  title: string
}

export const Section = ({ children, title }: SectionProps) => {
  return (
    <Box>
      <Text fontWeight='bold' color='gray.400' fontSize='small'>
        {title}
      </Text>
      <Stack spacing='4' mt='8' align='stretch'>
        {children}
      </Stack>
    </Box>
  )
}
