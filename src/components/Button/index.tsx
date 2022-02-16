import React from 'react'
import { Box } from '@chakra-ui/react'

export interface iButton {
  text: string
  onClick: any
  disabled: boolean
}

export const Button: React.FC<iButton> = ({ text, onClick, disabled }) => {
  return (
    <Box
      h="48px"
      w="100%"
      borderRadius="500px"
      bg={!disabled ? 'brand.secondary.pure' : 'brand.secondary.disabled'}
      color="white"
      onClick={onClick}
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      mb="20px"
    >
      {text}
    </Box>
  )
}
