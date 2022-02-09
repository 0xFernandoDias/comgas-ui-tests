import React from 'react'

interface IRequest {
  // Fetch
  texts: object
  plans: planType[]
  installations: string[]
  dates: Date | null
}

interface IResponse {
  // User Input
  currentStep: number
  plan: string
  zipCode: string
  register: registerType
  installation: string
  date: Date | null
}

interface State {
  request: IRequest
  response: IResponse
}

interface planType {
  name: string
  details: string
  description: string
  items: string[]
  prices: string[]
  complementaryServices: string[]
  technicalDetails: string[]
}

interface registerType {
  name: string
  email: string
  telephone: string
}

interface ContextType {
  state: State
  dispatch: (action: Action) => void
}

interface Action {
  type: FormActions
  payload: any
}

interface FormProviderProps {
  children: React.ReactNode
}

const initialData: State = {
  request: {
    texts: {},
    plans: [
      {
        name: '',
        details: '',
        description: '',
        items: [''],
        prices: [''],
        complementaryServices: [''],
        technicalDetails: [''],
      },
    ],
    installations: [''],
    dates: null,
  },
  response: {
    currentStep: 0,
    plan: '',
    zipCode: '',
    register: {
      name: '',
      email: '',
      telephone: '',
    },
    installation: '',
    date: null,
  },
}

const FormContext = React.createContext<ContextType | undefined>(undefined)

export enum FormActions {
  setRequest,
  setResponse,
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setRequest:
      return { ...state, request: action.payload }
    case FormActions.setResponse:
      return { ...state, response: action.payload }
    default:
      return state
  }
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = React.useReducer(formReducer, initialData)
  const value = { state, dispatch }
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export const useForm = () => {
  const context = React.useContext(FormContext)
  if (context === undefined) {
    throw new Error('useForm needs to be used inside the FormProvider')
  }
  return context
}
