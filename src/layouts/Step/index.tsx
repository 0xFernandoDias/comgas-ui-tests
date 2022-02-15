import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Statusbar } from '../../components/Statusbar'
import { useLocation } from 'react-router-dom'

export interface iStep {
  children: React.ReactNode
}

export const Step: React.FC<iStep> = ({ children }) => {
  const [location, setLocation] = useState('')
  const [step, setStep] = useState(Number)

  const path = useLocation()
  const { pathname } = path

  useEffect(() => {
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
    <Box>
      <Statusbar step={step} />
      {children}
    </Box>
  )
}
