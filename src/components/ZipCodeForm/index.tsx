import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { FormActions } from '../../contexts/FormContext'
import { tDispatch } from '../../contexts/FormContext/interfaces'

export interface iZipCodeForm {
  zipCode: string
  setZipCode: FormActions.setZipCode
  dispatch: tDispatch
  nextPage: string
  unavailable: string
}

export const ZipCodeForm: React.FC<iZipCodeForm> = ({
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
    navigate(-1)
  }

  // validation /buscaCep > unavailable

  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="zipCode">ZipCode</FormLabel>
        <Input
          id="zipCode"
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </FormControl>
      <Button onClick={goBack} />
      <Button onClick={goForward} />
    </Box>
  )
}
