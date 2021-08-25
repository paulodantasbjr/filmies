import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  isMobileVersion?: boolean
}

export const Profile = ({ isMobileVersion = true }: ProfileProps) => {
  return (
    <Flex align='center'>
      {isMobileVersion && (
        <Box mr='4' textAlign='right'>
          <Text>Paulo Dantas</Text>
          <Text color='gray.300'>paulorobertosjm@gmail.com</Text>
        </Box>
      )}
      <Avatar
        size='md'
        name='Paulo Dantas'
        src='https://github.com/paulodantasrj.png'
      />
    </Flex>
  )
}
