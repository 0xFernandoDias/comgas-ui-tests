import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Contract } from '../../pages/Contract'

const meta: Meta = {
  title: 'Pages/Contract',
  component: Contract,
}

export default meta

const Template: Story = (args) => <Contract {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
