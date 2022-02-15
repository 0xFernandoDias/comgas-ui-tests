import React, { useState, useEffect } from 'react'
import { iRegister, tDispatch } from '../../contexts/FormContext/interfaces'
import { FormActions } from '../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

export interface iRegisterProps {
  register: iRegister
  setRegister: FormActions.setRegister
  dispatch: tDispatch
  nextPage: string
}

export const Register: React.FC<iRegisterProps> = ({
  dispatch,
  nextPage,
  ...props
}) => {
  const navigate = useNavigate()

  const [register, setRegister] = useState({
    name: '',
    email: '',
    telephone: '',
  })

  useEffect(() => {
    const { name, email, telephone } = props.register
    const isEmpty = name === '' || email === '' || telephone === ''
    !isEmpty && setRegister(props.register)
  }, [])

  const { name, email, telephone } = register

  function goForward() {
    const isEmpty = name === '' || email === '' || telephone === ''

    !isEmpty &&
      dispatch({
        type: props.setRegister,
        payload: register,
      })
    navigate(nextPage)
  }

  function goBack() {
    navigate(-1)
  }

  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setRegister({ ...register, name: e.target.value })}
        />

        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setRegister({ ...register, email: e.target.value })}
        />

        <FormLabel htmlFor="telephone">Telephone</FormLabel>
        <Input
          id="telephone"
          type="tel"
          value={telephone}
          onChange={(e) =>
            setRegister({ ...register, telephone: e.target.value })
          }
        />
      </FormControl>
      <Button onClick={goBack} />
      <Button onClick={goForward} />
    </Box>
  )
}
