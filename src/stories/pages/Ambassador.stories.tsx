import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Ambassador } from '../../pages/Ambassador'

const meta: Meta = {
  title: 'Pages/Ambassador',
  component: Ambassador,
}

export default meta

const Template: Story = (args) => <Ambassador {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
