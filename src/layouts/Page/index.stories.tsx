import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Page, iPage } from '.'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'

const meta: Meta = {
  title: 'Layouts/Page',
  component: Page,
}

export default meta

const Template: Story<iPage> = (args) => (
  <ChakraProvider theme={theme}>
    <Page {...args} />
  </ChakraProvider>
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  step: '1',
}
