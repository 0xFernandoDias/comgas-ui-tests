import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormActions, useForm } from './contexts/FormContext'
import {
  Plans,
  PlanDetails,
  ZipCode,
  Unavailable,
  Ambassador,
  Register,
  PlanReview,
  Installation,
  Checkout,
  Schedule,
  Contract,
  NextSteps,
} from './pages'
import { plansArray } from './utils/plansArray'

export const AppRoutes = () => {
  const { state, dispatch } = useForm()

  React.useEffect(() => {
    dispatch({
      type: FormActions.setRequest,
      payload: {
        plans: plansArray,
        dates: null,
      },
    })
  }, [])

  // console.log(state.request)

  return (
    // Container as theme
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Plans />}>
          <Route path=":planName" element={<PlanDetails />} />
        </Route>
        <Route path="zipCode" element={<ZipCode />}>
          <Route path=":unavailable" element={<Unavailable />} />
          <Route path=":ambassador" element={<Ambassador />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="planReview" element={<PlanReview />} />
        <Route path="installation" element={<Installation />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="contract" element={<Contract />} />
        <Route path="nextSteps" element={<NextSteps />} />
      </Routes>
    </BrowserRouter>
  )
}
