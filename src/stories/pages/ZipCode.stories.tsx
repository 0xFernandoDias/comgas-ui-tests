import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ZipCode } from '../../pages/ZipCode'

const meta: Meta = {
  title: 'Pages/ZipCode',
  component: ZipCode,
}

export default meta

const Template: Story = (args) => <ZipCode {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {}
