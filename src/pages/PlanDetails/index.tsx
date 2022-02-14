import React from 'react'
import { useForm } from '../../contexts/FormContext'
import { Box } from '@chakra-ui/react'

export const PlanDetails: React.FC = () => {
  const { state } = useForm()
  const { plan } = state

  // name
  // description
  // details
  // items
  // price
  // complementary services

  // button onClick goes to register

  return <Box>Hello PlanDetails</Box>
}
