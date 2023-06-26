import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Text,
  TextAreaInput,
  TextAreaInputProps,
} from '@j040v1t0r-bookwise-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextAreaInput,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      options: ['true', false],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaInputProps>

export const Primary: StoryObj<TextAreaInputProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const WithCharacterLimits: StoryObj<TextAreaInputProps> = {
  args: {
    placeholder: 'Add any observations...',
    characterLimits: { current: 101, maximumLimit: 100 },
  },
}
