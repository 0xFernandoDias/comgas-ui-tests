import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Navbar, iNavbar } from '.'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'

const meta: Meta = {
  title: 'Components/Navbar',
  component: Navbar,
}

export default meta

const Template: Story<iNavbar> = (args) => (
  <ChakraProvider theme={theme}>
    <Navbar {...args} />
  </ChakraProvider>
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  step: '1',
}
