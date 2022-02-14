import { ReactNode } from 'react'
import { FormActions } from '.'

export interface iPlan {
  name: string
  details: string[]
  description: string
  items: string[]
  price: string
  complementaryServices: {
    name: string
    price: string
  }[]
  installations: {
    name: string
    price: string
  }[]
}

export interface iState {
  request: {
    plans: iPlan[]
    dates: Date | null
  }
  plan: iPlan
  register: {
    name: string
    email: string
    telephone: string
  }
  zipCode: string
  installation: string
  date: Date | null
}

export interface iAction {
  type: FormActions
  payload: any
}

export type tDispatch = (action: iAction) => void

export interface iContext {
  state: iState
  dispatch: tDispatch
}

export interface iFormProvider {
  children: ReactNode
}
