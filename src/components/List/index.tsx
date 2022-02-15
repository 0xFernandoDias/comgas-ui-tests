import { Box, VStack } from '@chakra-ui/react'
import React from 'react'

export interface iList {
  items: string[]
}

export const List: React.FC<iList> = ({ items }) => {
  return (
    <VStack pb="24px">
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
