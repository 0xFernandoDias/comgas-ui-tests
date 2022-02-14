import { Box, Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormActions } from '../../contexts/FormContext'
import { iInstallation, tDispatch } from '../../contexts/FormContext/interfaces'

export interface iInstallationForm {
  installation: iInstallation
  installations: iInstallation[]
  setInstallation: FormActions.setInstallation
  dispatch: tDispatch
  nextPage: string
}

export const InstallationForm: React.FC<iInstallationForm> = ({
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
      <Button onClick={goBack}>Back</Button>
    </Box>
  )
}

interface iOption {
  name: string
  price: string
  selected: boolean
  handleClick: any
}

const StyledOption = styled(Box)<{ selected: boolean }>`
  border: 2px solid ${(props) => (props.selected ? '#25CD89' : '#16195C')};
`

export const Option: React.FC<iOption> = ({
  name,
  price,
  selected,
  handleClick,
}) => {
  return (
    <StyledOption type="button" selected={selected} onClick={handleClick}>
      {name}
      {price}
    </StyledOption>
  )
}
