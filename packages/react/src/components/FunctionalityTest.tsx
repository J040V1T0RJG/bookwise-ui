import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const FunctionalityTest = styled('div', {
  padding: 20,
  borderRadius: 20,
  backgroundColor: 'red',
  border: '1px solid red',
})

export interface FunctionalityTestProps
  extends ComponentProps<typeof FunctionalityTest> {
  as?: ElementType
}

FunctionalityTest.displayName = 'FunctionalityTest'
