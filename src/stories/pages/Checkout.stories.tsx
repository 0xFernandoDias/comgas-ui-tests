import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Checkout } from '../../pages/Checkout'

const meta: Meta = {
  title: 'Pages/Checkout',
  component: Checkout,
}

export default meta

const Template: Story = (args) => <Checkout {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
