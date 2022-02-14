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
} from './pages'

export const AppRoutes = () => {
  const { dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setRequest,
      payload: {
        plans: plansArray,
      },
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Plans />} />
        <>
          <Route path="planDetails" element={<PlanDetails />} />
          <Route path="register" element={<Register />} />
          <Route path="zipCode" element={<ZipCode />} />
          <Route path="unavailable" element={<Unavailable />} />
          <Route path="installation" element={<Installation />} />
          <Route path="checkout" element={<Checkout />} />

          {/*404 Not Found*/}
        </>
      </Routes>
    </BrowserRouter>
  )
}
