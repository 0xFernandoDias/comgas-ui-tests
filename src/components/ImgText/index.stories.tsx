import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ImgText, iImgText } from '.'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'

const meta: Meta = {
  title: 'Components/ImgText',
  component: ImgText,
}

export default meta

const Template: Story<iImgText> = (args) => (
  <ChakraProvider theme={theme}>
    <ImgText {...args} />
  </ChakraProvider>
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  img: 'register',
  text: 'Por favor, preencha os dados abaixo',
  description: 'Quer saber em primeira mão quando chegarmos ai?',
}
