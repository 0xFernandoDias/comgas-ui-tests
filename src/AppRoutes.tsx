import React, { useEffect } from 'react'
import { FormActions, useForm } from './contexts/FormContext'
import { plansArray } from './utils/plansArray'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Plans,
  PlanDetails,
  ZipCode,
  Unavailable,
  Register,
  Installation,
  Checkout,
  Schedule,
} from './pages'
import { Step } from './layouts'

export const AppRoutes = () => {
  const { dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setRequest,
      payload: {
        plans: plansArray,
        dates: null,
      },
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Plans />} />
        <Step>
          <Route path="planDetails" element={<PlanDetails />} />
          <Route path="register" element={<Register />} />
          <Route path="zipCode" element={<ZipCode />} />
          <Route path="unavailable" element={<Unavailable />} />
          <Route path="installation" element={<Installation />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="checkout" element={<Checkout />} />
        </Step>
      </Routes>
    </BrowserRouter>
  )
}
