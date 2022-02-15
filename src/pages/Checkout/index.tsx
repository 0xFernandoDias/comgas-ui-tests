import React, { useEffect, useState } from 'react'
import { FormActions, useForm } from '../../contexts/FormContext'
import { Box, Button } from '@chakra-ui/react'
import { Modal } from '../../components'
import { useNavigate } from 'react-router-dom'

export interface iCheckout {
  sendData: any
}

export const Checkout: React.FC<iCheckout> = ({ sendData }) => {
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const { state, dispatch } = useForm()
  const { plan, register, zipCode, installation } = state
  const { name } = register

  function handleClick() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    name === '' && navigate(-1)
  }, [])

  return (
    <Box>
      {`${plan} ${register} ${zipCode} ${installation}`}
      {showModal && (
        <Modal
          sendData={sendData}
          dispatch={dispatch}
          clearValues={FormActions.clearValues}
          setShowModal={setShowModal}
        />
      )}
      <Button onClick={handleClick} />
    </Box>
  )
}
