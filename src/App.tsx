import React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { theme } from '../src/styles/theme'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box />
    </ChakraProvider>
  )
}
