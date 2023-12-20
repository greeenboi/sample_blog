'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    body:{
        bg: 'white',
        color: 'gray.800'
    }
    
})

export function Providers({children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}