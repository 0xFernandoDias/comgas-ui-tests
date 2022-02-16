import { Box, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FormActions } from '../../contexts/FormContext'
import { iInstallation, tDispatch } from '../../contexts/FormContext/interfaces'
import { Button } from '../Button'

export interface iInstallationProps {
  installation: iInstallation
  installations: iInstallation[]
  setInstallation: FormActions.setInstallation
  dispatch: tDispatch
  prevPage: string
  nextPage: string
  navigate: any
}

export const Installation: React.FC<iInstallationProps> = ({
  installations,
  dispatch,
  prevPage,
  nextPage,
  navigate,
  ...props
}) => {
  const [installation, setInstallation] = useState({
    name: '',
    price: '',
  })

  useEffect(() => {
    const { name, price } = props.installation
    const isEmpty = name === '' || price === ''
    !isEmpty && setInstallation(props.installation)
  }, [])

  function goForward() {
    dispatch({
      type: props.setInstallation,
      payload: installation,
    })
    navigate(nextPage)
  }

  function goBack() {
    navigate(prevPage)
  }

  return (
    <Box>
      <Box
        textStyle="title"
        color="brand.primary.pure"
        textAlign="center"
        pb="24px"
      >
        Você quer que a Comgás cuide dessa instalação pra você?
      </Box>

      <Box pb="107px">
        {installations.map((element, idx) => {
          const { name, price } = element

          return (
            <Option
              selected={element === installation}
              setInstallation={setInstallation}
              goForward={goForward}
              element={element}
              key={idx}
              name={
                name !== undefined ? name : 'Não quero instalação da Comgás'
              }
              price={price}
            />
          )
        })}
      </Box>
      <Button text="Voltar" disabled={false} onClick={goBack} />
    </Box>
  )
}

interface iOption {
  name: string
  price: string
  selected: boolean
  setInstallation: any
  goForward: any
  element: iInstallation
}

export const Option: React.FC<iOption> = ({
  name,
  price,
  selected,
  setInstallation,
  element,
  goForward,
}) => {
  return (
    <Box
      h="57px"
      borderRadius="12px"
      borderColor="#ECECEC"
      borderWidth="2px"
      onClick={() => {
        setInstallation(element)
        goForward()
      }}
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
