import React, { useEffect, useState } from 'react'
import { FormActions, useForm } from '../../contexts/FormContext'
import { Box, HStack, Image } from '@chakra-ui/react'
import { Button, Modal } from '../../components'
import { useNavigate } from 'react-router-dom'
import { List } from '../../components/List'
import { Price } from '../../components/Price'

export interface iCheckout {
  sendData: any
}

export const Checkout: React.FC<iCheckout> = ({ sendData }) => {
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const { state, dispatch } = useForm()
  const { plan, register, zipCode, installation } = state
  const { name } = installation

  function handleClick() {
    setShowModal(!showModal)
  }

  function goBack() {
    navigate('/installation')
  }

  useEffect(() => {
    name === '' && navigate('/installation')
  }, [])
  return name !== '' ? (
    <Box>
      <Box textStyle="title" color="brand.primary.pure" pt="40pt" pb="26px">
        Revise seus pacotes
      </Box>
      <HStack>
        <Box maxW="70px" pb="26px">
          <Image src={`../../assets/images/plans/${plan.name}.png`} />
        </Box>
        <Box textStyle="smallTitle" pb="12px" color="brand.primary.pure">
          {plan.name}
        </Box>
      </HStack>
      <List items={plan.details} />
      <Box textStyle="priceText" pb="12px">
        O que está incluso
      </Box>
      <List items={plan.items} />
      <Price price={plan.price} />

      <Box textStyle="priceText" pb="12px">
        Instalação
      </Box>
      <Box textStyle="description" pb="12px">
        {installation.name}
      </Box>

      <Box textStyle="priceText" pb="12px">
        Seus dados
      </Box>
      <Box textStyle="description" pb="12px">
        {register.name}
      </Box>
      <Box textStyle="description" pb="12px">
        {register.email}
      </Box>
      <Box textStyle="description" pb="12px">
        {register.telephone}
      </Box>
      <Box textStyle="description" pb="32px">
        {zipCode}
      </Box>

      <Button text="Assinar contrato" onClick={handleClick} />
      <Button text="Voltar" onClick={goBack} />
      {showModal && (
        <Modal
          sendData={sendData}
          dispatch={dispatch}
          clearValues={FormActions.clearValues}
          setShowModal={setShowModal}
        />
      )}
    </Box>
  ) : (
    <></>
  )
}
