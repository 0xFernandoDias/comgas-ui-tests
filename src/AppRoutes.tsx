import React, { useEffect } from 'react'
import { FormActions, useForm } from './contexts/FormContext'
import { plansArray } from './utils/plansArray'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Plans,
  PlanDetails,
  Register,
  ZipCode,
  Successful,
  Unavailable,
  Installation,
  Checkout,
} from './pages'
import { Step } from './layouts'

export const AppRoutes = () => {
  const { state, dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setRequest,
      payload: {
        plans: plansArray,
      },
    })
  }, [])

  function sendData() {
    console.log(state)
  }

  return (
    <BrowserRouter>
      <Step>
        <Routes>
          <Route path="/" element={<Plans />} />
          <>
            <Route path="planDetails" element={<PlanDetails />} />
            <Route path="register" element={<Register />} />
            <Route path="zipCode" element={<ZipCode />}>
              <Route path=":successful" element={<Successful />} />
              <Route path=":unavailable" element={<Unavailable />} />
            </Route>
            <Route path="installation" element={<Installation />} />
            <Route path="checkout" element={<Checkout sendData={sendData} />} />
          </>
        </Routes>
      </Step>
    </BrowserRouter>
  )
}
