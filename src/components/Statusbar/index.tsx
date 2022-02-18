import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { Step1, Step2, Step3, Step4 } from '../../assets/svgs/Statusbar'

export interface iStatusbar {
  step?: string
}

export const Statusbar: React.FC<iStatusbar> = ({ step }) => {
  return (
    <VStack>
      < Step1/>
    </VStack>
  )
}
