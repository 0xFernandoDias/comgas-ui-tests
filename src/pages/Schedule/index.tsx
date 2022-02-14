import React from 'react'
import { Box } from '@chakra-ui/react'
import { useForm, FormActions } from '../../contexts/FormContext'

export const Schedule: React.FC = () => {
  const { state, dispatch } = useForm()
  const { date } = state
  const { dates } = state.request
  // doesnt need const { setDate } = FormActions

  // chakra calendar

  return <Box>Hello Schedule</Box>
}
