import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Statusbar, iStatusbar } from '.'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'

const meta: Meta = {
  title: 'components/Statusbar',
  component: Statusbar,
}

export default meta

const Template: Story<iStatusbar> = (args) => (
  <ChakraProvider theme={theme}>
    <Statusbar {...args} />
  </ChakraProvider>
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  step: '1',
}
