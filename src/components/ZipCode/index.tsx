import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import { FormActions } from '../../contexts/FormContext'
import { tDispatch } from '../../contexts/FormContext/interfaces'
import { ImgText } from '../ImgText'
import { Button } from '../Button'

export interface iZipCode {
  zipCode: string
  setZipCode: FormActions.setZipCode
  dispatch: tDispatch
  nextPage: string
  unavailable: string
}

export const ZipCode: React.FC<iZipCode> = ({
  dispatch,
  nextPage,
  unavailable,
  ...props
}) => {
  const navigate = useNavigate()

  const [zipCode, setZipCode] = useState('')

  useEffect(() => {
    props.zipCode !== '' && setZipCode(props.zipCode)
  }, [])

  function goForward() {
    zipCode !== '' &&
      dispatch({
        type: props.setZipCode,
        payload: zipCode,
      })
    navigate(nextPage)
  }

  function goBack() {
    navigate('/register')
  }

  // validation /buscaCep > unavailable

  return (
    <VStack>
      <ImgText img="zipcode" text="Em qual endereço você quer instalar gás?" />
      <FormControl pt="30px" pb="80px">
        <FormLabel htmlFor="zipCode" textStyle="description">
          Insira o CEP
        </FormLabel>
        <Input
          id="zipCode"
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </FormControl>
      <Button text="Continuar" onClick={goForward} />
      <Button text="Voltar" onClick={goBack} />
    </VStack>
  )
}
