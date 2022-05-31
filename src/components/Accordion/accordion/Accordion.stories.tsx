import { Accordion } from "./Accordion";
import { action } from '@storybook/addon-actions'
import { ComponentStory } from '@storybook/react';
import { useState } from "react";

const GetCategoryObj = (categoryName: string) => {
  return {
    table: {
      category: categoryName
    }
  }
}

export default {
  title: 'components/Accordion',
  component: Accordion,
  argTypes: {
    color: {
      control: 'color',
      ...GetCategoryObj('color')
    },
    onChange: {
      ...GetCategoryObj('Event')
    },
    onClick: {
      ...GetCategoryObj('Event')
    },
    items: {
      ...GetCategoryObj('Main')
    },
    collapsed: {
      ...GetCategoryObj('Main')
    },
    titleValue: {
      ...GetCategoryObj('Main')
    }
  }
}


const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

const callbacksProps = {
  onChange: callback,
  onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
  ...callbacksProps,
  titleValue: "Menu",
  collapsed: true,
  items: [],
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
  ...callbacksProps,
  titleValue: "Menu",
  collapsed: false,
  items: [{ id: 1, name: 'Kiryll' },
  { id: 2, name: 'Andry' },
  { id: 3, name: 'Katya' }],
}

export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)} />
}

ModeChanging.args = {
  titleValue: 'Users',
  items: [{ id: 1, name: 'Kiryll' },
  { id: 2, name: 'Andry' },
  { id: 3, name: 'Katya' }
  ],
  onClick: (value) => {
    alert(`user with ID ${value} should be happe`)
  }
}