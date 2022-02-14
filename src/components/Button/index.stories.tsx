import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, iButton } from '.'

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
}

export default meta

const Template: Story<iButton> = (args) => <Button {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {
  text: 'Começar!',
}
