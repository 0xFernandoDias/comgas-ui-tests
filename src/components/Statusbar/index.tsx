import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { Step1, Step2, Step3, Step4 } from '../../assets/svgs/Statusbar'

export interface iStatusbar {
  step?: string
}

export const Statusbar: React.FC<iStatusbar> = ({ step }) => {
  return (
    <VStack>
      {step === '1' && <Step1 />}
      {step === '2' && <Step2 />}
      {step === '3' && <Step3 />}
      {step === '4' && <Step4 />}
    </VStack>
  )
}
