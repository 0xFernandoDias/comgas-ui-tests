import React from 'react'
import { Box } from '@chakra-ui/react'

export interface iButton {
  text: string
}

export const Button: React.FC<iButton> = ({ text }) => {
  // text, color, size, onClick

  return (
    <Box
      h="48px"
      borderRadius="500px"
      bg="#8FBB39"
      color="white"
      maxW="150px"
      alignItems="center"
      justifyContent="center"
    >
      <Box fontWeight={500} fontSize={16} lineHeight="100%">
        {text}
      </Box>
    </Box>
  )
}
