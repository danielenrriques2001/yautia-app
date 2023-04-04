import { HeadingPomodoroTitle, HeadingContainer } from '@/public/styles'
import React from 'react'
import useSelect from '@/components/Cripto/Hooks/useSelect'
import CurrencyList from 'currency-list'
import { useEffect } from 'react'
import { useState } from 'react'

const Cripto = () => {
  const [currencies, setCurrencies ] = useState([]);

  const [coinValue, SelectCoins] =  useSelect('Select Monedas', [1,2,3,6,5,])


  console.log(currencies)
  useEffect(() => {

    setCurrencies(CurrencyList.getAll('en_US'))
  

  }, [])
  
  return (

    <>
        <HeadingContainer>
      <HeadingPomodoroTitle
       Size = {5}
       Weight = {300}
       Color = {'#2B3467'}
    
      >Cripto Converter</HeadingPomodoroTitle>
      </HeadingContainer>
      <SelectCoins/>
    
    
    </>

  )
}

export default Cripto