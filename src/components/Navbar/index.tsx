import React from 'react'
import { Box } from '@chakra-ui/react'
import { Logo } from '../../assets/svgs/Logo'
import { Statusbar } from '../Statusbar'

export interface iNavbar {
  step?: string
}

export const Navbar: React.FC<iNavbar> = ({ step }) => {
  return (
    <Box>
      <Logo />
      <Statusbar step={step} />
    </Box>
  )
}
