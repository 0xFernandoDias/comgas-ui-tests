import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Register, iRegisterProps } from '.'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'

const meta: Meta = {
  title: 'Components/Register',
  component: Register,
}

export default meta

const Template: Story<iRegisterProps> = (args) => (
  <ChakraProvider theme={theme}>
    <Register {...args} />
  </ChakraProvider>
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  register: {
    name: '',
    email: '',
    telephone: '',
  },
}
