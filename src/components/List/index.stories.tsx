import React from 'react'
import { Meta, Story } from '@storybook/react'
import { List, iList } from '.'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'

const meta: Meta = {
  title: 'Components/List',
  component: List,
}

export default meta

const Template: Story<iList> = (args) => (
  <ChakraProvider theme={theme}>
    <List {...args} />
  </ChakraProvider>
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  items: ['Ligação de 1 fogão', 'Seguro Extendido'],
}
