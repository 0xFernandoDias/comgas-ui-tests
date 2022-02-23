import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import { FormActions } from '../../contexts/FormContext'
import { tDispatch } from '../../contexts/FormContext/interfaces'
import { ImgText } from '../ImgText'
import { Button } from '../Button'
import { useQuery } from 'react-query'

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

  function zipCodeValidation() {
    const { isError } = useQuery('zipCode', () => {
      const URL = `viacep.com.br/ws/${zipCode}/json/`

      fetch(URL)
    })

    return { isError }
  }

  function goForward() {
    const { isError } = zipCodeValidation()

    if (zipCode !== '' && zipCode.length > 8) {
      if (isError) {
        navigate(unavailable)
      } else {
        dispatch({
          type: props.setZipCode,
          payload: zipCode,
        })
        navigate(nextPage)
      }
    }
  }

  function goBack() {
    navigate('/register')
  }

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
      <Flex align="center" justify="center" gap="16px" w="100%">
        <Button text="Voltar" onClick={goBack} />
        <Button
          text="Continuar"
          onClick={goForward}
          disabled={zipCode === '' && zipCode.length < 8}
        />
      </Flex>
    </VStack>
  )
}
