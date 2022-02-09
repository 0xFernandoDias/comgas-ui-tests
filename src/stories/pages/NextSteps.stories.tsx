import React from 'react'
import { Meta, Story } from '@storybook/react'
import { NextSteps } from '../../pages/NextSteps'

const meta: Meta = {
  title: 'Pages/NextSteps',
  component: NextSteps,
}

export default meta

const Template: Story = (args) => <NextSteps {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
