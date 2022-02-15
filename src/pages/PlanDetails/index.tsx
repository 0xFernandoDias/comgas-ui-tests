import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../contexts/FormContext'
import { Plan } from '../../components/Plan'

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

  return <Plan plan={plan} goBack={goBack} goForward={goForward} />
}
