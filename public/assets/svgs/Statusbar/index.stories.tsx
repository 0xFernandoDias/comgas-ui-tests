import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Statusbar, iStatusbar } from '.'

const meta: Meta = {
  title: 'Assets/Statusbar',
  component: Statusbar,
}

export default meta

const Template: Story<iStatusbar> = (args) => <Statusbar {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {
  step: 3,
}
