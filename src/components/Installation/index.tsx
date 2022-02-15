import { Box, Center, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormActions } from '../../contexts/FormContext'
import { iInstallation, tDispatch } from '../../contexts/FormContext/interfaces'
import { Button } from '../Button'

export interface iInstallationProps {
  installation: iInstallation
  installations: iInstallation[]
  setInstallation: FormActions.setInstallation
  dispatch: tDispatch
  nextPage: string
}

export const Installation: React.FC<iInstallationProps> = ({
  installations,
  dispatch,
  nextPage,
  ...props
}) => {
  const navigate = useNavigate()

  const [installation, setInstallation] = useState({
    name: '',
    price: '',
  })

  useEffect(() => {
    const { name, price } = props.installation
    const isEmpty = name === '' || price === ''
    !isEmpty && setInstallation(props.installation)
  }, [])

  function goForward(e: iInstallation) {
    setInstallation(e)

    dispatch({
      type: props.setInstallation,
      payload: installation,
    })
    navigate(nextPage)
  }

  function goBack() {
    navigate(-1)
  }

  return (
    <Box>
      <Center>
        <Box textStyle="title" color="brand.primary.pure">
          Você quer que a Comgás cuide dessa instalação pra você?
        </Box>
      </Center>
      {installations.map((element, idx) => {
        const { name, price } = element

        return (
          <Option
            selected={element === installation}
            handleClick={(event: iInstallation) => goForward(event)}
            key={idx}
            name={name}
            price={price}
          />
        )
      })}
      <Button text="Voltar" onClick={goBack} />
    </Box>
  )
}

interface iOption {
  name: string
  price: string
  selected: boolean
  handleClick: any
}

export const Option: React.FC<iOption> = ({
  name,
  price,
  selected,
  handleClick,
}) => {
  return (
    <Box h="57px" borderColor="gray.100" onClick={handleClick}>
      <HStack>
        <Center>
          {name}
          {price} {selected && ' ✔️'}
        </Center>
      </HStack>
    </Box>
  )
}
