import React from 'react'
import { Box } from '@chakra-ui/react'
import { Statusbar as StatusbarSvg } from '../../assets/svgs/Statusbar'

export const Statusbar: React.FC = () => {
  // check which page it is in

  return (
    <Box>
      <StatusbarSvg step={step} />
    </Box>
  )
}
