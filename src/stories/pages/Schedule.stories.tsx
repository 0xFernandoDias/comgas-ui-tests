import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Schedule } from '../../pages/Schedule'

const meta: Meta = {
  title: 'Pages/Schedule',
  component: Schedule,
}

export default meta

const Template: Story = (args) => <Schedule {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
