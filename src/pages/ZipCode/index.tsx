import React from 'react'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Box } from '@chakra-ui/react'

export const ZipCode: React.FC = () => {
  const { state, dispatch } = useForm()
  const { zipCode } = state
  // doesnt need const { setZipCode } = FormActions

  // formating
  // validation /buscaCep
  // if successful goes to ... and setZipCode else goes to unavailable
  // if plan.name === '' goes back to / (think more about the possibilities)
  // button link goes back to /
  // see if its already something in input

  return <Box>Hello ZipCode</Box>
}
