import React from 'react'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Box } from '@chakra-ui/react'

export const Installation: React.FC = () => {
  const { state, dispatch } = useForm()
  const { installation } = state
  // doesnt need const { setInstallation } = FormActions
  // 3 options

  return <Box>Hello Installation</Box>
}
