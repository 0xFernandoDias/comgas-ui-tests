import React from 'react'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Box, HStack, Image } from '@chakra-ui/react'
import { PlanCard } from '../../components/PlanCard'
import { Page } from '../../layouts'
import { useNavigate } from 'react-router-dom'

export const Plans: React.FC = () => {
  const navigate = useNavigate()

  const { state, dispatch } = useForm()
  const { plans } = state.request

  return (
    <Page>
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
        <HStack>
          {plans.map((plan, idx) => {
            return (
              <PlanCard
                key={idx}
                plan={plan}
                setPlan={FormActions.setPlan}
                navigate={navigate}
                dispatch={dispatch}
                nextPage="/planDetails"
              />
            )
          })}
        </HStack>
      </Box>
    </Page>
  )
}
