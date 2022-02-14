import React from 'react'
import { Box } from '@chakra-ui/react'
import { FormActions } from '../../contexts/FormContext'
import {
  iPlan as iPlanObject,
  tDispatch,
} from '../../contexts/FormContext/interfaces'

export interface iPlan {
  plan: iPlanObject
  setPlan: FormActions.setPlan
  dispatch: tDispatch
}

export const Plan: React.FC<iPlan> = ({ plan, setPlan, dispatch }) => {
  // Lais SVG

  // name
  // description
  // value

  // NOOOOOOOO button onclick goes to /:{name}
  // setPlan: FormActions.setPlan USES DISPATCH

  return <Box />
}
