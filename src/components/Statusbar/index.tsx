import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, VStack, Center } from '@chakra-ui/react'
import { Statusbar as StatusbarSvg } from '../../assets/svgs/Statusbar'

export const Statusbar: React.FC = () => {
  const [location, setLocation] = useState('')
  const [step, setStep] = useState(Number)

  useEffect(() => {
    const path = useLocation()
    const { pathname } = path

    setLocation(pathname)
  }, [])

  useEffect(() => {
    location === '/register'
      ? setStep(1)
      : location === '/zipCode' ||
        location === '/zipCode/successful' ||
        location === '/zipCode/unavailable'
      ? setStep(3)
      : location === '/installation'
      ? setStep(5)
      : location === '/checkout'
      ? setStep(7)
      : location
  }, [location])

  return (
    <VStack pb={step !== undefined ? '32px' : '0'}>
      <StatusbarSvg step={step} />
      {step === 1 ||
        (step === 3 && (
          <Center>
            <Box textStyle="priceText">Dados Pessoais</Box>
          </Center>
        ))}
      {step === 6 ||
        (step === 7 && (
          <Box textStyle="priceText" right="0">
            Contratar
          </Box>
        ))}
    </VStack>
  )
}
