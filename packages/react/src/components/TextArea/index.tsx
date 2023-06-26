import { ComponentProps, ElementRef, forwardRef } from 'react'
import { CharacterCounter, TextArea, TextAreaContainer } from './styles'

export interface TextAreaInputProps extends ComponentProps<typeof TextArea> {
  characterLimits?: {
    current: number
    maximumLimit: number
  }
}

export const TextAreaInput = forwardRef<
  ElementRef<typeof TextArea>,
  TextAreaInputProps
>(({ characterLimits, ...props }: TextAreaInputProps, ref) => {
  return (
    <TextAreaContainer>
      <TextArea ref={ref} {...props} />
      {!!characterLimits && (
        <CharacterCounter
          size="xs"
          style={{
            color:
              characterLimits.current > characterLimits.maximumLimit
                ? 'red'
                : '$gray400',
          }}
        >
          {characterLimits.current}/{characterLimits.maximumLimit}
        </CharacterCounter>
      )}
    </TextAreaContainer>
  )
})

TextAreaInput.displayName = 'TextArea'
