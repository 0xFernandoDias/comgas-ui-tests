import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Installation } from '../../pages/Installation'

const meta: Meta = {
  title: 'Pages/Installation',
  component: Installation,
}

export default meta

const Template: Story = (args) => <Installation {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
