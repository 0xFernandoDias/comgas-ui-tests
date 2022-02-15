import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Navbar } from '.'

const meta: Meta = {
  title: 'Components/Navbar',
  component: Navbar,
}

export default meta

const Template: Story = (args) => <Navbar {...args} />

export const FirstStory = Template.bind({})
