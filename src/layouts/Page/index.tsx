import React from 'react'
import { Box } from '@chakra-ui/react'
import { Navbar } from '../../components/Navbar'

export interface iPage {
  children: React.ReactNode
}

export const Page: React.FC<iPage> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  )
}
