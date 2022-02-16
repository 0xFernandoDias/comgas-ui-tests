import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Plan, iPlan } from '.'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'

const meta: Meta = {
  title: 'Components/Plan',
  component: Plan,
}

export default meta

const Template: Story<iPlan> = (args) => (
  <ChakraProvider theme={theme}>
    <Plan {...args} />
  </ChakraProvider>
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  plan: {
    name: 'Banho',
    details: [
      'Gás sem interrupção',
      'Menos tempo de cocção',
      'Panelas mais conservadas',
    ],
    description: 'Ideal pra transformar as refeições em grandes memórias.',
    items: ['Ligação de 1 fogão', 'Seguro Extendido'],
    price: '2099.40',
    complementaryServices: [
      {
        name: 'Cleaning Service',
        price: '75.90',
      },
      {
        name: 'insurance',
        price: '5.90',
      },
    ],
    installations: [
      { name: 'Tubulação embutida', price: '450.00' },
      { name: 'Tubulação aparente', price: '350.00' },
      'Não quero instalação da Comgás',
    ],
  },
}
