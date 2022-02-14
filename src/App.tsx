import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/styles/theme'
import { FormProvider } from './contexts/FormContext'
import { Page, Step } from './layouts'
import { AppRoutes } from './AppRoutes'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <FormProvider>
        <Page>
          <Step>
            <AppRoutes />
          </Step>
        </Page>
      </FormProvider>
    </ChakraProvider>
  )
}
