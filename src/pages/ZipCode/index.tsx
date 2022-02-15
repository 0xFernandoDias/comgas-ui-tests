import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Box } from '@chakra-ui/react'
import { ZipCodeForm } from '../../components/ZipCodeForm'

export const ZipCode: React.FC = () => {
  const navigate = useNavigate()

  const { state, dispatch } = useForm()
  const { register, zipCode } = state
  const { name } = register

  useEffect(() => {
    name === '' && navigate(-1)
  }, [])

  return (
    <Box>
      <ZipCodeForm
        zipCode={zipCode}
        setZipCode={FormActions.setZipCode}
        dispatch={dispatch}
        nextPage="successful"
        unavailable="unavailable"
      />
    </Box>
  )
}
