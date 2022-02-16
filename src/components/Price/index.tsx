import React from 'react'
import { Box, HStack, VStack } from '@chakra-ui/react'

interface iPrice {
  price: string
}

export const Price: React.FC<iPrice> = ({ price }) => {
  return (
    <VStack pb="30px" display="flex" alignItems="left">
      <Box textStyle="priceText">A partir de 6X de</Box>
      <HStack>
        <Box textStyle="priceText">R$</Box>
        <Box textStyle="smallTitle" color="brand.primary.pure">
          {price}
        </Box>
      </HStack>
    </VStack>
  )
}
