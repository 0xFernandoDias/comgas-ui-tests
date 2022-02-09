import React from 'react'
import { Meta, Story } from '@storybook/react'
import { PlanReview } from '../../pages/PlanReview'

const meta: Meta = {
  title: 'Pages/PlanReview',
  component: PlanReview,
}

export default meta

const Template: Story = (args) => <PlanReview {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
