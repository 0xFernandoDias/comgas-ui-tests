import React, { HTMLAttributes } from 'react'
import { Box } from '@chakra-ui/react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string
}

export const Button = ({ text }: ButtonProps) => {
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
