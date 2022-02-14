import React from 'react'
import {
  iPlan as iPlanObject,
  tDispatch,
} from '../../contexts/FormContext/interfaces'
import { FormActions } from '../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@chakra-ui/react'

export interface iPlan {
  plan: iPlanObject
  setPlan: FormActions.setPlan
  dispatch: tDispatch
}

export const Plan: React.FC<iPlan> = ({ plan, setPlan, dispatch }) => {
  const navigate = useNavigate()

  function handleClick() {
    dispatch({
      type: setPlan,
      payload: plan,
    })
    navigate('/planDetails')
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
