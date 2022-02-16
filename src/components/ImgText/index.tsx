import { Box, VStack, Image, Center } from '@chakra-ui/react'
import React from 'react'

export interface iImgText {
  img: string
  text: string
  description?: string
}

export const ImgText: React.FC<iImgText> = ({ img, text, description }) => {
  return (
    <VStack pb="52px">
      <Box pb="15px">
        <Image src={`../../assets/images/pages/${img}.png`} />
      </Box>
      <Box textStyle="title" color="brand.primary.pure">
        {text}
      </Box>
      {description && (
        <Box pt="50px" textStyle="description">
          {description}
        </Box>
      )}
    </VStack>
  )
}
