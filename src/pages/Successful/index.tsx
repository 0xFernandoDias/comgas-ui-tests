import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../contexts/FormContext'
import { Box, Button } from '@chakra-ui/react'

export const Successful: React.FC = () => {
  const navigate = useNavigate()
  const { state } = useForm()
  const { zipCode } = state

  useEffect(() => {
    zipCode === '' && navigate('zipCode')
  }, [])

  function goForward() {
    navigate('installation')
  }
  function goBack() {
    navigate(-1)
  }

  return (
    <Box>
      <Button onClick={goBack} />
      <Button onClick={goForward} />
    </Box>
  )
}
