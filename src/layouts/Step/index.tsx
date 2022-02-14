import React from 'react'
import { Box } from '@chakra-ui/react'
import { Statusbar } from '../../components/Statusbar'

export interface iStep {
  children: React.ReactNode
}

export const Step: React.FC<iStep> = ({ children }) => {
  return (
    <Box>
      <Statusbar />
      {children}
    </Box>
  )
}
