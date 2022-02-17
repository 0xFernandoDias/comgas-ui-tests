import React, { useState, useEffect } from 'react'
import { iRegister, tDispatch } from '../../contexts/FormContext/interfaces'
import { FormActions } from '../../contexts/FormContext'
import { Box, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import { ImgText } from '../ImgText'
import { Button } from '../Button'

export interface iRegisterProps {
  register: iRegister
  setRegister: FormActions.setRegister
  dispatch: tDispatch
  navigate: any
  prevPage: string
  nextPage: string
}

export const Register: React.FC<iRegisterProps> = ({
  dispatch,
  navigate,
  prevPage,
  nextPage,
  ...props
}) => {
  const initialState = {
    name: '',
    email: '',
    telephone: '',
  }

  const [register, setRegister] = useState(initialState)
  const [initialRegisterState, setInitialRegisterState] = useState(Boolean)

  useEffect(() => {
    register === initialState
      ? setInitialRegisterState(true)
      : setInitialRegisterState(false)
  }, [register])

  useEffect(() => {
    const { name, email, telephone } = props.register
    const isEmpty = name === '' || email === '' || telephone === ''
    !isEmpty && setRegister(props.register)
  }, [])

  const { name, email, telephone } = register

  const isEmpty = name === '' || email === '' || telephone === ''

  function goForward() {
    !isEmpty &&
      dispatch({
        type: props.setRegister,
        payload: register,
      })
    navigate(nextPage)
  }

  function goBack() {
    navigate(prevPage)
  }

  return (
    <VStack>
      <ImgText img="register" text="Por favor, preencha os dados abaixo" />
      <FormControl>
        <Box pb="24px">
          <FormLabel htmlFor="name" textStyle="description" pb="12px">
            Nome
          </FormLabel>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setRegister({ ...register, name: e.target.value })}
          />
        </Box>
        <Box pb="24px">
          <FormLabel htmlFor="email" textStyle="description" pb="12px">
            E-mail
          </FormLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
          />
        </Box>
        <Box pb="24px">
          <FormLabel htmlFor="telephone" textStyle="description" pb="12px">
            Telefone
          </FormLabel>
          <Input
            id="telephone"
            type="tel"
            value={telephone}
            onChange={(e) =>
              setRegister({ ...register, telephone: e.target.value })
            }
          />
        </Box>
      </FormControl>
      <Button
        text="Próximo"
        disabled={initialRegisterState}
        onClick={goForward}
      />
      <Button text="Voltar" onClick={goBack} />
    </VStack>
  )
}
