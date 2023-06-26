import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, TextInputContainer } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  icon?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>>(
  ({ icon, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        <Input ref={ref} {...props} />
        <MagnifyingGlass />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
