import React from 'react'
import { Meta, Story } from '@storybook/react'
import { PlanDetails } from '../../pages/PlanDetails'

const meta: Meta = {
  title: 'Pages/PlanDetails',
  component: PlanDetails,
}

export default meta

const Template: Story = (args) => <PlanDetails {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
