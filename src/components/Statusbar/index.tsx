import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { Step4 } from '../../assets/svgs/Statusbar/Step4'
export interface iStatusbar {
  step?: string
}

export const Statusbar: React.FC<iStatusbar> = ({ step }) => {
  return (
    <VStack>
      <Step4 />
    </VStack>
  )
}
