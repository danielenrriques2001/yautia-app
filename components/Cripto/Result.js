import { DeleteButton, HeadingPomodoroTitle } from '@/public/styles'
import { Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Fragment } from 'react'
import {BiArrowBack} from 'react-icons/bi'
const Result = ({result, setResult}) => {

  const {CHANGE24HOUR, CHANGEDAY, CHANGEHOUR, HIGH24HOUR, PRICE, IMAGEURL, CIRCULATINGSUPPLY} = result;

  return (
    <Card>
      
       <HeadingPomodoroTitle>High 24 Hour:</HeadingPomodoroTitle>
       <HeadingPomodoroTitle>{HIGH24HOUR}</HeadingPomodoroTitle>

       <HeadingPomodoroTitle>Change 24 Hour:</HeadingPomodoroTitle>
       <HeadingPomodoroTitle>{CHANGE24HOUR}</HeadingPomodoroTitle>

       <HeadingPomodoroTitle>Change Day:</HeadingPomodoroTitle>
       <HeadingPomodoroTitle>{CHANGEDAY}</HeadingPomodoroTitle>

       <HeadingPomodoroTitle>Price:</HeadingPomodoroTitle>
       <HeadingPomodoroTitle>{PRICE}</HeadingPomodoroTitle>

       <HeadingPomodoroTitle>CIRCULATINGSUPPLY:</HeadingPomodoroTitle>
       <HeadingPomodoroTitle>{CIRCULATINGSUPPLY}</HeadingPomodoroTitle>

      

       <DeleteButton onClick={()=>{setResult([])}}>
          <BiArrowBack/>
       </DeleteButton>
    </Card>
   

  )
}

export default Result