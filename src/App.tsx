import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/styles/theme'
import { FormProvider } from './contexts/FormContext'
import { Page, Step } from './layouts'
import { AppRoutes } from './AppRoutes'
import '@fontsource/work-sans/400.css'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Page>
        <FormProvider>
          <Step>
            <AppRoutes />
          </Step>
        </FormProvider>
      </Page>
    </ChakraProvider>
  )
}
