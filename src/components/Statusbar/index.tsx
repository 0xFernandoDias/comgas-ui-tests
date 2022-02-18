import React, { createElement } from 'react'
import { VStack } from '@chakra-ui/react'
import { steps } from '../../assets/svgs/Statusbar/index'

export interface iStatusbar {
  step?: string
}

export const Statusbar: React.FC<iStatusbar> = ({ step }) => {
  function currentStep () {
    if (step) {
      return createElement(steps.get(step))
    }
  }

  return (
    <VStack>
      {currentStep()}
    </VStack>
  )
}
