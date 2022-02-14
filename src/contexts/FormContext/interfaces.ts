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
  installations: iInstallation[]
}

export interface iRegister {
  name: string
  email: string
  telephone: string
}

export interface iState {
  request: {
    plans: iPlan[]
  }
  plan: iPlan
  register: iRegister
  zipCode: string
  installation: iInstallation
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

export interface iInstallation {
  name: string
  price: string
}

export interface iFormProvider {
  children: ReactNode
}
