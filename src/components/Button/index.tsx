import React from 'react'
import { Box } from '@chakra-ui/react'

export interface iButton {
  text: string
  disabled?: boolean
  onClick?: any
}

export const Button: React.FC<iButton> = ({
  text,
  disabled = false,
  onClick,
}) => {
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
      data-testid="button"
    >
      {text}
    </Box>
  )
}
