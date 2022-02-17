import React from 'react'
import { Box } from '@chakra-ui/react'
import { Navbar } from '../../components/Navbar'

export interface iPage {
  children: React.ReactNode
  step?: string
}

export const Page: React.FC<iPage> = ({ children, step }) => {
  return (
    <Box>
      <Navbar step={step} />
      {children}
    </Box>
  )
}
