import { HeadingPomodoroTitle, HeadingContainer, EditButton, DeleteButton } from '@/public/styles'
import React from 'react'
import useSelect from '@/components/Cripto/Hooks/useSelect'
import CurrencyList from 'currency-list'
import { useEffect } from 'react'
import { useState } from 'react'
import Result from '@/components/Cripto/Result'
const Cripto = () => {

  const [pairs, setpairs] = useState({})

  const [currencies, setCurrencies ] = useState([]);
  const [criptos, setCriptos ] = useState([]);

  const [coinValue, SelectCoins] =  useSelect('Select Monedas', currencies)

  const [criptoValue, SelectCriptos] =  useSelect('Select Cripto', criptos)

  const [result, setResult] = useState([])

  useEffect(() => {
    
    function getCurrencies() {

      const currencies = Object.values(CurrencyList.getAll('en_US'));
      const newCurrencies = currencies.map((e) => {
       return { 
        name: e.name,
        code: e.code 
              }
      });
     
      setCurrencies(newCurrencies)


    }
    async function getCriptoCurrencies() {
          const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
          const response = await fetch(url)
          const result = await response.json()

          const arrayCriptos = result.Data.map( cripto => {
             return {
                  code: cripto.CoinInfo.Name,
                  name: cripto.CoinInfo.FullName
              }
          })

          setCriptos(arrayCriptos)

      }
    getCriptoCurrencies();
    getCurrencies()
  

  }, [])

  useEffect(() => {
    if(Object.keys(pairs).length > 0) {
        
      const cotizarCripto = async () => {

          const { coinValue, criptoValue } = pairs
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoValue}&tsyms=${coinValue}`

          const response = await fetch(url)
          const result = await response.json()

         setResult(result.DISPLAY[criptoValue][coinValue])

      }

      cotizarCripto()
    }
}, [pairs])

  const handleSubmit = e => {
    e.preventDefault()

    if([coinValue, criptoValue].includes('')) {
        return
    }

    setpairs({
        coinValue,
        criptoValue
    })
}
  
  if(result.length === 0){
  
  return (

    <>
  
        <HeadingContainer>
      <HeadingPomodoroTitle
       Size = {5}
       Weight = {300}
       Color = {'#2B3467'}
    
      >Cripto Converter</HeadingPomodoroTitle>
      </HeadingContainer>

      <form
        onSubmit={handleSubmit}
      >

      <SelectCoins/>
      <SelectCriptos/>
      <DeleteButton type='subit'>Submit!</DeleteButton>

      </form>

    
    
    </>

  )} else {
    return <Result  result = {result} setResult = {setResult} />
  }
}

export default Cripto