import React, { useEffect, useState } from 'react'
import { iInstallation, tDispatch } from '../../contexts/FormContext/interfaces'
import { FormActions } from '../../contexts/FormContext'
import { Box, HStack } from '@chakra-ui/react'
import { Button as ButtonComponent } from '../Button'

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
  const [installation, setInstallation] = useState({})

  useEffect(() => {
    const { name, price } = props.installation
    const isEmpty = name === '' || price === ''
    !isEmpty && setInstallation(props.installation)
  }, [])

  function goForward(element: iInstallation) {
    dispatch({
      type: props.setInstallation,
      payload: installation,
    })
    setInstallation(element)
    installation !==
      {
        name: '',
        price: '',
      } && navigate(nextPage)
  }

  function goBack() {
    navigate(prevPage)
  }

  return (
    <Box pt="74px">
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
              name={
                name !== undefined ? name : 'Não quero instalação da Comgás'
              }
              price={price}
              element={element}
              onClick={goForward}
              key={idx}
            />
          )
        })}
      </Box>
      <ButtonComponent text="Voltar" disabled={false} onClick={goBack} />
    </Box>
  )
}

interface iOption {
  selected: boolean
  name: string
  price: string
  element: iInstallation
  onClick: any
}

export const Option: React.FC<iOption> = ({
  selected,
  name,
  price,
  element,
  onClick,
}) => {
  function handleClick() {
    onClick(element)
  }

  return (
    <>
      <Box
        h="57px"
        borderRadius="12px"
        borderColor="#ECECEC"
        borderWidth="2px"
        cursor="pointer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={handleClick}
      >
        <HStack>
          <Box>{name}</Box>
          <Box>
            {name !== 'Não quero instalação da Comgás' ? '- R$' : ''} {price}
            {selected && ' ✔️'}
          </Box>
        </HStack>
      </Box>
    </>
  )
}
