import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/styles/theme'
import { FormProvider } from './contexts/FormContext'
import { Page } from './layouts'
import { AppRoutes } from './AppRoutes'
import '@fontsource/work-sans/700.css'
import '@fontsource/work-sans/500.css'
import '@fontsource/work-sans/400.css'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Page>
        <FormProvider>
          <AppRoutes />
        </FormProvider>
      </Page>
    </ChakraProvider>
  )
}
