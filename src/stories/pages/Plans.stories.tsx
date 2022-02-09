import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Plans } from '../../pages/Plans'

const meta: Meta = {
  title: 'Pages/Plans',
  component: Plans,
}

export default meta

const Template: Story = (args) => <Plans {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
