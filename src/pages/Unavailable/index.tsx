import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../contexts/FormContext'
import { VStack } from '@chakra-ui/react'
import { ImgText } from '../../components/ImgText'
import { Button } from '../../components'

export const Unavailable: React.FC = () => {
  const navigate = useNavigate()
  const { state } = useForm()
  const { zipCode } = state

  useEffect(() => {
    zipCode === '' && navigate('/zipCode')
  }, [])

  function goBack() {
    navigate('/')
  }

  return (
    <VStack>
      <ImgText
        img="unavailable"
        text="Infelizmente ainda não chegamos na sua região."
        description="Quer saber em primeira mão quando chegarmos ai? Junte 10 vizinhos na sua rua e ganhe desconto, além de acelerar nossa chegada no bairro!"
      />
      <Button text="Voltar" onClick={goBack} />
    </VStack>
  )
}
