import { ElementType } from 'react'
import {
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
  Icon,
} from '@chakra-ui/react'

interface LinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string
}

export const Link = ({ children, icon, ...rest }: LinkProps) => {
  return (
    <ChakraLink display='flex' align='center' {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>
        {children}
      </Text>
    </ChakraLink>
  )
}
