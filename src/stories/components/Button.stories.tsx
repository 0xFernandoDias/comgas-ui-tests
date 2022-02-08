import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from '../../components/Button'

const meta: Meta = {
  title: 'Button',
  component: Button,
}

export default meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {
  text: 'Começar!',
}
