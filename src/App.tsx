import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/styles/theme'
import { AppRoutes } from './AppRoutes'
import { FormProvider } from './contexts/FormContext'
import { Page } from './layouts'

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
