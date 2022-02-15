import React, { useState } from 'react'
import { FormActions, useForm } from '../../contexts/FormContext'
import { Box, Button } from '@chakra-ui/react'
import { Modal } from '../../components'

export interface iCheckout {
  sendData: any
}

export const Checkout: React.FC<iCheckout> = ({ sendData }) => {
  const [showModal, setShowModal] = useState(false)
  const { state, dispatch } = useForm()
  const { plan, register, zipCode, installation } = state

  function handleClick() {
    setShowModal(!showModal)
  }

  // modal
  // SEND DATA DB

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
