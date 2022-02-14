import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Box } from '@chakra-ui/react'
import { RegisterForm } from '../../components/RegisterForm'

export const Register: React.FC = () => {
  const navigate = useNavigate()

  const { state, dispatch } = useForm()
  const { plan, register } = state
  const { name } = plan

  useEffect(() => {
    name === '' && navigate(-1)
  }, [])

  return (
    <Box>
      <RegisterForm
        register={register}
        setRegister={FormActions.setRegister}
        dispatch={dispatch}
        nextPage="zipCode"
      />
    </Box>
  )
}
