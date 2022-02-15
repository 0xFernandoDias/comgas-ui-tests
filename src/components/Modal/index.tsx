import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@chakra-ui/react'
import { tDispatch } from '../../contexts/FormContext/interfaces'
import { FormActions } from '../../contexts/FormContext'

interface iModal {
  sendData: any
  dispatch: tDispatch
  clearValues: FormActions.clearValues
  setShowModal: any
}

export const Modal: React.FC<iModal> = ({
  sendData,
  dispatch,
  clearValues,
  setShowModal,
}) => {
  const navigate = useNavigate()

  function handleClick() {
    sendData()

    dispatch({
      type: clearValues,
    })
    navigate('plans')
  }

  function exit() {
    setShowModal(false)
  }

  return (
    <Box>
      <Button onClick={exit} />
      <Button onClick={handleClick}></Button>
    </Box>
  )
}
