import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, iButton } from '.'
import { theme } from '../../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
}

export default meta

const Template: Story<iButton> = (args) => (
  <ChakraProvider theme={theme}>
    <Button {...args} />
  </ChakraProvider>
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  text: 'Começar!',
  disabled: false,
}
