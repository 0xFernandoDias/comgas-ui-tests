import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../contexts/FormContext'
import { Box, Button } from '@chakra-ui/react'

export const Unavailable: React.FC = () => {
  const navigate = useNavigate()
  const { state } = useForm()
  const { zipCode } = state

  useEffect(() => {
    zipCode === '' && navigate('zipCode')
  }, [])

  function goBack() {
    navigate('/')
  }

  return (
    <Box>
      Unavailable
      <Button onClick={goBack} />
    </Box>
  )
}
