import React from 'react'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Box } from '@chakra-ui/react'
import { Plan } from '../../components/Plan'

export const Plans: React.FC = () => {
  const { state, dispatch } = useForm()
  const plans = state.request.plans
  // doesnt need const { setPlan } = FormActions

  return (
    <Box>
      {plans.map((plan, idx) => {
        return (
          <Plan
            key={idx}
            plan={plan}
            dispatch={dispatch}
            setPlan={FormActions.setPlan}
          />
        )
      })}
    </Box>
  )
}
