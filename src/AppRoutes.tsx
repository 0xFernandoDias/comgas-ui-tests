import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Statusbar } from './components'
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

export const AppRoutes = () => {
  const { state, dispatch } = useForm()

  React.useEffect(() => {
    dispatch({
      type: FormActions.setRequest,
      payload: {
        plans: [
          {
            name: 'Fogão',
            details: [
              'Gás sem interrupção',
              'Menos tempo de cocção',
              'Panelas mais conservadas',
            ],
            description:
              'Ideal pra transformar as refeições em grandes memórias.',
            items: ['Ligação de 1 fogão', 'Seguro Extendido'],
            price: '2099.40',
            complementaryServices: [
              {
                name: 'Cleaning Service',
                price: '75.90',
              },
              {
                name: 'insurance',
                price: '5.90',
              },
            ],
            technicalDetails: [''],
            installations: [
              { name: 'Tubulação embutida', price: '450.00' },
              { name: 'Tubulação aparente', price: '350.00' },
              'Não quero instalação da Comgás',
            ],
          },
          {
            name: 'Banho',
            details: [
              'Gás sem interrupção',
              'Menos tempo de cocção',
              'Panelas mais conservadas',
            ],
            description:
              'Ideal pra transformar as refeições em grandes memórias.',
            items: ['Ligação de 1 fogão', 'Seguro Extendido'],
            price: '2099.40',
            complementaryServices: [
              {
                name: 'Cleaning Service',
                price: '75.90',
              },
              {
                name: 'insurance',
                price: '5.90',
              },
            ],
            technicalDetails: [''],
            installations: [
              { name: 'Tubulação embutida', price: '450.00' },
              { name: 'Tubulação aparente', price: '350.00' },
              'Não quero instalação da Comgás',
            ],
          },
          {
            name: 'Banho e torneira',
            details: [
              'Gás sem interrupção',
              'Menos tempo de cocção',
              'Panelas mais conservadas',
            ],
            description:
              'Ideal pra transformar as refeições em grandes memórias.',
            items: ['Ligação de 1 fogão', 'Seguro Extendido'],
            price: '2099.40',
            complementaryServices: [
              {
                name: 'Cleaning Service',
                price: '75.90',
              },
              {
                name: 'insurance',
                price: '5.90',
              },
            ],
            technicalDetails: [''],
            installations: [
              { name: 'Tubulação embutida', price: '450.00' },
              { name: 'Tubulação aparente', price: '350.00' },
              'Não quero instalação da Comgás',
            ],
          },
          {
            name: 'Piscina',
            details: [
              'Gás sem interrupção',
              'Menos tempo de cocção',
              'Panelas mais conservadas',
            ],
            description:
              'Ideal pra transformar as refeições em grandes memórias.',
            items: ['Ligação de 1 fogão', 'Seguro Extendido'],
            price: '2099.40',
            complementaryServices: [
              {
                name: 'Cleaning Service',
                price: '75.90',
              },
              {
                name: 'insurance',
                price: '5.90',
              },
            ],
            technicalDetails: [''],
            installations: [
              { name: 'Tubulação embutida', price: '450.00' },
              { name: 'Tubulação aparente', price: '350.00' },
              'Não quero instalação da Comgás',
            ],
          },
        ],
        dates: null,
      },
    })
  })

  return (
    // Container as theme

    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Plans />}>
            <Route path=":planName" element={<PlanDetails />} />
          </Route>
          <>
            <Statusbar />
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
          </>
        </>
      </Routes>
    </BrowserRouter>
  )
}
