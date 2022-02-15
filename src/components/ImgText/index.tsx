import { Box, VStack, Image, Center } from '@chakra-ui/react'
import React from 'react'

export interface iImgText {
  img: string
  text: string
  description?: string
}

export const ImgText: React.FC<iImgText> = ({ img, text, description }) => {
  return (
    <VStack pb="32px">
      <Center>
        <Center>
          <Box pb="15px">
            <Center>
              <Image src={`../../assets/images/pages/${img}.png`} />
            </Center>
          </Box>
        </Center>
        <Center>
          <Box textStyle="title" color="brand.primary.pure">
            {text}
          </Box>
        </Center>
        {description && (
          <Box pt="50px" textStyle="description">
            {description}
          </Box>
        )}
      </Center>
    </VStack>
  )
}
