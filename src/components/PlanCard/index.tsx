import React from 'react'
import { iPlan, tDispatch } from '../../contexts/FormContext/interfaces'
import { FormActions } from '../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@chakra-ui/react'

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

  // Lais SVG

  // name
  // description
  // value

  return (
    <Box>
      <Button onClick={handleClick} />
    </Box>
  )
}
