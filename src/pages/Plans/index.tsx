import React from 'react'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Box, Image } from '@chakra-ui/react'
import { PlanCard } from '../../components/PlanCard'

export const Plans: React.FC = () => {
  const { state, dispatch } = useForm()
  const { plans } = state.request

  return (
    <Box>
      <Box>
        <Image src="../../assets/images/pages/plans.png" alt="plans" />
      </Box>
      <Box textStyle="title" color="brand.primary.pure" pb="50px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </Box>
      <Box textStyle="subtitle" pb="24px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </Box>
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
