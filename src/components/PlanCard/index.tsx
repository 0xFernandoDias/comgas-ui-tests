import React from 'react'
import { iPlan, tDispatch } from '../../contexts/FormContext/interfaces'
import { FormActions } from '../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { Box, Image, VStack } from '@chakra-ui/react'
import { Price } from '../Price'
import { Button } from '../Button'

export interface iPlanCard {
  plan: iPlan
  setPlan: FormActions.setPlan
  dispatch: tDispatch
}

export const PlanCard: React.FC<iPlanCard> = ({ plan, setPlan, dispatch }) => {
  const navigate = useNavigate()

  function handleClick() {
    dispatch({
      type: setPlan,
      payload: plan,
    })
    navigate('planDetails')
  }

  const { name, description, price } = plan

  return (
    <VStack maxW="248px" maxH="386px">
      <Box pb="6px">
        <Image src={`../../assets/images/plans/${name}.png`} />
      </Box>
      <Box pb="4px" textStyle="smallTitle" color="brand.primary.pure">
        {name}
      </Box>
      <Box pb="4px" textStyle="description">
        {description}
      </Box>
      <Price price={price} />
      <Button onClick={handleClick} text="Conheça e contrate" />
    </VStack>
  )
}
