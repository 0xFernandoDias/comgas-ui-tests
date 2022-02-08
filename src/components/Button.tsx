import React from 'react';
import { Box } from '@chakra-ui/react';

export interface ButtonProps {
  text: String;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <Box
      h='48px'
      borderRadius='500px'
      bg='#8FBB39'
      color='white'
      fontWeight={500}
      fontSize={16}
      lineHeight='100%'
    >
      {text}
    </Box>
  );
};
