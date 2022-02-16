import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Price, iPrice } from '.'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'

const meta: Meta = {
  title: 'Components/Price',
  component: Price,
}

export default meta

const Template: Story<iPrice> = (args) => (
  <ChakraProvider theme={theme}>
    <Price {...args} />
  </ChakraProvider>
)

export const FirstStory = Template.bind({
  price: '300.00',
})
