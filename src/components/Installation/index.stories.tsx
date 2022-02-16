import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Installation, iInstallationProps } from '.'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'

const meta: Meta = {
  title: 'Components/Installation',
  component: Installation,
}

export default meta

const Template: Story<iInstallationProps> = (args) => (
  <ChakraProvider theme={theme}>
    <Installation {...args} />
  </ChakraProvider>
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  installations: [
    { name: 'Tubulação embutida', price: '450.00' },
    { name: 'Tubulação aparente', price: '350.00' },
    'Não quero instalação da Comgás',
  ],
  installation: { name: 'Tubulação embutida', price: '450.00' },
}
