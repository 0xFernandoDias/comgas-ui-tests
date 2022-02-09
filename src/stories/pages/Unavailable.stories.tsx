import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Unavailable } from '../../pages/Unavailable'

const meta: Meta = {
  title: 'Pages/Unavailable',
  component: Unavailable,
}

export default meta

const Template: Story = (args) => <Unavailable {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
