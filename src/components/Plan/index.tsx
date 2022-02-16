import React from 'react'
import { iPlan } from '../../contexts/FormContext/interfaces'
import { Box, VStack, Image } from '@chakra-ui/react'
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
    <VStack display="flex" alignItems="left">
      <Box pb="7px">
        <Image src={`../../assets/images/plans/${name}.png`} />
      </Box>
      <Box textStyle="priceText">Pacote</Box>
      <TitleSubtitle title={name} subtitle={description} />
      <List items={details} />
      <Box textStyle="priceText" pb="24px">
        O que está incluso
      </Box>
      <List items={items} />
      <Price price={price} />
      <Button text="Contratar esse pacote" onClick={goForward} />
      <Button text="Voltar" onClick={goBack} />
    </VStack>
  )
}
