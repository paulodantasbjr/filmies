import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { ReactNode } from 'react'
import { createContext } from 'react'

interface SidebarContextProps {
  children: ReactNode
}

type SidebarContextProviderProps = UseDisclosureReturn

const SidebarContext = createContext({} as SidebarContextProviderProps)

export const SidebarContextProvider = ({ children }: SidebarContextProps) => {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)
