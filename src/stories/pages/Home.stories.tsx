import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Home } from '../../pages/Home'

const meta: Meta = {
  title: 'Pages/Home',
  component: Home,
}

export default meta

const Template: Story = (args) => <Home {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
