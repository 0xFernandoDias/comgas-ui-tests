import React from 'react'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Box } from '@chakra-ui/react'
import { PlanCard } from '../../components/PlanCard'

export const Plans: React.FC = () => {
  const { state, dispatch } = useForm()
  const { plans } = state.request

  return (
    <Box>
      {plans.map((plan, idx) => {
        return (
          <PlanCard
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
