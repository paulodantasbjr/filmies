import { ElementType } from 'react'
import {
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
  Icon,
} from '@chakra-ui/react'

import { ActiveLink } from './ActiveLink'

interface LinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string
  href: string
}

export const LinkNav = ({ href, children, icon, ...rest }: LinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display='flex' align='center' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
