import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../contexts/FormContext'
import { Box, Button } from '@chakra-ui/react'

export const PlanDetails: React.FC = () => {
  const navigate = useNavigate()

  const { state } = useForm()
  const { plan } = state
  const { name } = plan

  useEffect(() => {
    name === '' && navigate('/')
  }, [])

  function goForward() {
    navigate('register')
  }
  function goBack() {
    navigate(-1)
  }

  // name
  // description
  // details
  // items
  // price
  // complementary services

  return (
    <Box>
      <Button onClick={goBack} />
      <Button onClick={goForward} />
    </Box>
  )
}
