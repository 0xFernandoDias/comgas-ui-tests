import React from 'react'
import { Box, VStack, Image } from '@chakra-ui/react'
import { iPlan } from '../../contexts/FormContext/interfaces'
import { TitleSubtitle } from '../TitleSubtitle'
import { List } from '../List'
import { Price } from '../Price'
import { Button } from '../Button'

interface iPlanProps {
  plan: iPlan
  goBack: any
  goForward: any
}

export const Plan: React.FC<iPlanProps> = ({ plan, goBack, goForward }) => {
  const { name, description, details, items, price } = plan

  return (
    <VStack>
      <Box pb="28px">
        <Image src={`../../assets/images/plans/${name}.png`} />
      </Box>
      <Box textStyle="price" pb="3px">
        Pacote
      </Box>
      <TitleSubtitle title={name} subtitle={description} />
      <List items={details} />
      <List items={items} />
      <Price price={price} />
      <Button text="Contratar esse pacote" onClick={goForward} />
      <Button text="Voltar" onClick={goBack} />
    </VStack>
  )
}
