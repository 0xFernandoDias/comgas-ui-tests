import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../contexts/FormContext'
import { Flex, VStack } from '@chakra-ui/react'
import { ImgText } from '../../components/ImgText'
import { Button } from '../../components'
import { Page } from '../../layouts'

export const Successful: React.FC = () => {
  const navigate = useNavigate()
  const { state } = useForm()
  const { zipCode } = state

  useEffect(() => {
    zipCode === '' && navigate('/zipCode')
  }, [])

  function goForward() {
    navigate('/installation')
  }
  function goBack() {
    navigate('/zipCode')
  }

  return zipCode !== '' ? (
    <Page step="2">
      <VStack>
        <ImgText
          img="successful"
          text="A Comgas já está na sua região!"
          description="Você sabia que 80% dos seus vizinhos já são clientes Comgas?"
        />
        <Flex align="center" justify="center" gap='16px' w="100%">
          <Button text="Continuar" onClick={goForward} />
          <Button text="Voltar" onClick={goBack} />
        </Flex>
      </VStack>
    </Page>
  ) : (
    <></>
  )
}
