import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
}

export const ActiveLink = ({ children, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter()
  let isActive = false

  if (asPath == rest.href || asPath == rest.as) {
    isActive = true
  }
  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive ? 'purple.500' : 'gray.800' })}
    </Link>
  )
}
