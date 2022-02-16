import React from 'react'
import { VStack, Box, Image } from '@chakra-ui/react'

export interface iImgText {
  img: 'plans' | 'register' | 'successful' | 'unavailable' | 'zipCode'
  text: string
  description?: string
}

export const ImgText: React.FC<iImgText> = ({ img, text, description }) => {
  return (
    <VStack mb="32px" textAlign="center">
      <Box mb="21px">
        <Image src={`../../assets/images/pages/${img}.png`} />
      </Box>
      <Box textStyle="title" color="brand.primary.pure" pb="48px">
        {text}
      </Box>
      {description && (
        <Box mb="80px" textStyle="description">
          {description}
        </Box>
      )}
    </VStack>
  )
}
