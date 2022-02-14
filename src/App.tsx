import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/styles/theme'
import { FormProvider } from './contexts/FormContext'
import { Page } from './layouts'
import { AppRoutes } from './AppRoutes'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <FormProvider>
        <Page>
          <AppRoutes />
        </Page>
      </FormProvider>
    </ChakraProvider>
  )
}
