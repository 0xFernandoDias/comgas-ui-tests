import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/styles/theme'

import '@fontsource/work-sans/700.css'
import '@fontsource/work-sans/500.css'
import '@fontsource/work-sans/400.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
]
