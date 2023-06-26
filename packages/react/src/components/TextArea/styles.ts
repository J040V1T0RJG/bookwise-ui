import { styled } from '../../styles'
import { Text } from '../Text'

export const TextAreaContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
})

export const TextArea = styled('textarea', {
  resize: 'none',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  width: '100%',
  height: '$40',
  padding: '$4 $5',

  borderRadius: '$sm',
  border: '2px solid $gray500',
  boxSizing: 'border-box',
  backgroundColor: '$gray800',

  '&:focus': {
    outline: 0,
    borderColor: '$green200',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export const CharacterCounter = styled(Text, {
  position: 'absolute',
  bottom: '$1',
  right: '$2',
  color: '$gray400',
})
