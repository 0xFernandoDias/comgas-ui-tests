import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Register as RegisterForm } from '../../components/Register'

export const Register: React.FC = () => {
  const navigate = useNavigate()

  const { state, dispatch } = useForm()
  const { plan, register } = state
  const { name } = plan

  useEffect(() => {
    name === '' && navigate(-1)
  }, [])

  return (
    <RegisterForm
      register={register}
      setRegister={FormActions.setRegister}
      dispatch={dispatch}
      nextPage="zipCode"
    />
  )
}
