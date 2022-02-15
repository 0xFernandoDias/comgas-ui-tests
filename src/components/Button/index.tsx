import React from 'react'
import { Box, Center } from '@chakra-ui/react'

export interface iButton {
  text: string
  onClick: any
}

export const Button: React.FC<iButton> = ({ text, onClick }) => {
  // color, size

  return (
    <Box
      h="48px"
      w="100%"
      borderRadius="500px"
      bg="brand.secondary.pure"
      color="white"
      alignItems="center"
      onClick={onClick}
    >
      <Center>{text}</Center>
    </Box>
  )
}
