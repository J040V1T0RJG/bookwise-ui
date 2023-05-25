import type { Meta, StoryObj } from '@storybook/react'
import { FunctionalityTest, FunctionalityTestProps } from '@j040v1t0r-bookwise-ui/react'
import React from 'react'

export default {
  title: 'Surfaces/Box',
  component: FunctionalityTest,
  args: {
    children: <p>Testando o elemento FunctionalityTest</p>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<FunctionalityTestProps>

export const Primary: StoryObj<FunctionalityTestProps> = {}
