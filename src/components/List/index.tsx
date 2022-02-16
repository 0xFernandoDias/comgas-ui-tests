import React from 'react'
import { Box, VStack } from '@chakra-ui/react'

export interface iList {
  items: string[]
}

export const List: React.FC<iList> = ({ items }) => {
  return (
    <VStack pb="24px" display="flex" alignItems="left">
      {items.map((item, idx) => {
        return (
          <ul key={idx}>
            <Box textStyle="subtitle">✔️ {item}</Box>
          </ul>
        )
      })}
    </VStack>
  )
}
