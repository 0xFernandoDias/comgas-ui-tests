import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/styles/theme'
import { AppRoutes } from './AppRoutes'
import { Navbar } from './components/Navbar'
import { FormProvider } from './contexts/FormContext'

export const App = () => {
  return (
    <FormProvider>
      <ChakraProvider theme={theme}>
        <>
          <Navbar />
          <AppRoutes />
        </>
      </ChakraProvider>
    </FormProvider>
  )
}
