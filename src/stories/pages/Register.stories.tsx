import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Register } from '../../pages/Register'

const meta: Meta = {
  title: 'Pages/Register',
  component: Register,
}

export default meta

const Template: Story = (args) => <Register {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
