import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/styles/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { FormProvider } from './contexts/FormContext'
import { AppRoutes } from './AppRoutes'
import '@fontsource/work-sans/700.css'
import '@fontsource/work-sans/500.css'
import '@fontsource/work-sans/400.css'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <FormProvider>
          <AppRoutes />
        </FormProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}
