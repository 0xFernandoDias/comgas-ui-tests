import React from 'react'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Box } from '@chakra-ui/react'

export const Register: React.FC = () => {
  const { state, dispatch } = useForm()
  const { register } = state
  // doesnt need const { setRegister } = FormActions

  // formating
  // validation
  // if successful goes to ZipCode
  // if status.plan.name === '' goes back to / (think more about the possibilities)
  // button link goes back to /
  // input shows the current state

  return <Box>Hello Register</Box>
}
