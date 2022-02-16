import React from 'react'
import { iPlan, tDispatch } from '../../contexts/FormContext/interfaces'
import { FormActions } from '../../contexts/FormContext'
import { VStack, Box, Image } from '@chakra-ui/react'
import { TitleSubtitle } from '../TitleSubtitle'
import { Price } from '../Price'
import { Button } from '../Button'

export interface iPlanCard {
  plan: iPlan
  setPlan: FormActions.setPlan
  navigate: any
  dispatch: tDispatch
  nextPage: string
}

export const PlanCard: React.FC<iPlanCard> = ({
  plan,
  setPlan,
  navigate,
  dispatch,
  nextPage,
}) => {
  const { name, description, price } = plan

  function handleClick() {
    dispatch({
      type: setPlan,
      payload: plan,
    })
    navigate(nextPage)
  }

  return (
    <VStack
      minW="248px"
      borderRadius="12px"
      borderWidth="2px"
      borderColor="#ECECEC"
      pr="16px"
      pb="50px"
    >
      <Box pb="6px">
        <Image src={`../../assets/images/plans/${name}.png`} />
      </Box>
      <VStack alignItems="baseline" pl="24px">
        <TitleSubtitle title={name} subtitle={description} />
        <Price price={price} />
        <Button onClick={handleClick} text="Conheça e contrate" />
      </VStack>
    </VStack>
  )
}
