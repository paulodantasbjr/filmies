import { Box, Stack, Text, Link } from '@chakra-ui/react'
import { DragHandleIcon, AtSignIcon } from '@chakra-ui/icons'

export const Sidebar = () => {
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='small'>
            GERAL
          </Text>
          <Stack spacing='4' mt='8' align='stretch'>
            <Link display='flex' align='center'>
              <DragHandleIcon fontSize='20' />
              <Text ml='4' fontWeight='medium'>
                Dashboard
              </Text>
            </Link>
            <Link display='flex' align='center'>
              <AtSignIcon fontSize='20' />
              <Text ml='4' fontWeight='medium'>
                Usuarios
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
