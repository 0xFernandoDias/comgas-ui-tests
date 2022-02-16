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
      <Box textStyle="title" color="brand.primary.pure" pt="80px" pb="80px">
        Você quer que a Comgás cuide dessa instalação pra você?
      </Box>

      <Box pb="80px">
        {installations.map((element, idx) => {
          const { name, price } = element

          return (
            <Option
              selected={element === installation}
              handleClick={(event: iInstallation) => goForward(event)}
              key={idx}
              name={
                name !== undefined ? name : 'Não quero instalação da Comgás'
              }
              price={price}
            />
          )
        })}
      </Box>
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
    <Box
      h="57px"
      borderRadius="12px"
      borderColor="#ECECEC"
      borderWidth="2px"
      onClick={handleClick}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <HStack cursor="pointer">
        <Box>{name}</Box>
        <Box>
          {name !== 'Não quero instalação da Comgás' ? '- R$' : ''} {price}{' '}
          {selected && ' ✔️'}
        </Box>
      </HStack>
    </Box>
  )
}
