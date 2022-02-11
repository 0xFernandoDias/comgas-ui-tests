import React, { ReactNode, createContext, useReducer, useContext } from 'react'

interface iState {
  request: {
    plans: {
      name: string
      details: string[]
      description: string
      items: string[]
      price: string
      complementaryServices: {
        name: string
        price: string
      }[]
      technicalDetails: string[]
      installations: {
        name: string
        price: string
      }[]
    }[]
    dates: Date | null
  }
  currentStep: number
  plan: string
  installation: string
  name: string
  email: string
  telephone: string
  zipCode: string
  date: Date | null
}

interface iAction {
  type: FormActions
  payload: any
}

interface iContext {
  state: iState
  dispatch: (action: iAction) => void
}

interface iFormProviderProps {
  children: ReactNode
}

const initialData: iState = {
  request: {
    plans: [
      {
        name: '',
        details: [''],
        description: '',
        items: [''],
        price: '',
        complementaryServices: [{ name: '', price: '' }],
        technicalDetails: [''],
        installations: [{ name: '', price: '' }],
      },
    ],
    dates: null,
  },
  currentStep: 0,
  plan: '',
  installation: '',
  name: '',
  email: '',
  telephone: '',
  zipCode: '',
  date: null,
}

const FormContext = createContext<iContext | undefined>(undefined)

export enum FormActions {
  setRequest,
  setCurrentStep,
  setPlan,
  setInstallation,
  setName,
  setEmail,
  setTelephone,
  setZipCode,
  setDate,
}

const formReducer = (state: iState, action: iAction) => {
  switch (action.type) {
    case FormActions.setRequest:
      return { ...state, request: action.payload }
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload }
    case FormActions.setPlan:
      return { ...state, plan: action.payload }
    case FormActions.setInstallation:
      return { ...state, installation: action.payload }
    case FormActions.setName:
      return { ...state, name: action.payload }
    case FormActions.setEmail:
      return { ...state, email: action.payload }
    case FormActions.setTelephone:
      return { ...state, telephone: action.payload }
    case FormActions.setZipCode:
      return { ...state, zipCode: action.payload }
    case FormActions.setDate:
      return { ...state, date: action.payload }
    default:
      return state
  }
}

export const FormProvider = ({ children }: iFormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export const useForm = () => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useForm needs to be used inside the FormProvider')
  }
  return context
}
