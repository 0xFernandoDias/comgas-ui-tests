import React from 'react'
import { Box, VStack, Center } from '@chakra-ui/react'
import { Statusbar as StatusbarSvg } from '../../assets/svgs/Statusbar'

export interface iStatusbar {
  step: string
}

export const Statusbar: React.FC<iStatusbar> = ({ step }) => {
  return (
    <VStack zIndex="999">
      <StatusbarSvg step={step} />
      {step === '1' ||
        (step === '3' && (
          <Center>
            <Box textStyle="priceText">Dados Pessoais</Box>
          </Center>
        ))}
      {step === '6' ||
        (step === '7' && (
          <Box textStyle="priceText" right="0">
            Contratar
          </Box>
        ))}
    </VStack>
  )
}
