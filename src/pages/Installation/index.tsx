import React, { useEffect } from 'react'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { InstallationForm } from '../../components/InstallationForm'

export const Installation: React.FC = () => {
  const navigate = useNavigate()

  const { state, dispatch } = useForm()
  const { zipCode, plan, installation } = state
  const { installations } = plan

  useEffect(() => {
    zipCode === '' && navigate(-1)
  }, [])

  return (
    <Box>
      <InstallationForm
        installation={installation}
        installations={installations}
        setInstallation={FormActions.setInstallation}
        dispatch={dispatch}
        nextPage="checkout"
      />
    </Box>
  )
}
