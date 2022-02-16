import { Box, VStack } from '@chakra-ui/react'
import React from 'react'

export interface iTitleSubtitle {
  title: string
  subtitle: string
}

export const TitleSubtitle: React.FC<iTitleSubtitle> = ({
  title,
  subtitle,
}) => {
  return (
    <VStack display="flex" alignItems="left">
      <Box pb="4px" textStyle="title" color="brand.primary.pure">
        {title}
      </Box>
      <Box pb="16px" textStyle="description">
        {subtitle}
      </Box>
    </VStack>
  )
}
