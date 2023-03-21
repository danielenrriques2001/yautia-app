import { HeadingPomodoroTitle, SettingButton, StyledInput } from '@/public/styles';
import { TextField } from '@mui/material';
import { useSession, getSession } from 'next-auth/react';
import React, {useState} from 'react'
import styled from 'styled-components';

function NewBudget({budgetNumber, setBudgetNumber, setValidBudget, id, updateUser}) {

  const [message, setmessage] = useState('')

  const handlePresupuesto = (e) => {

      e.preventDefault();

    if(!budgetNumber || budgetNumber < 0) {
    
    setmessage('Ingresa un presupuesto valido')

      return;
    }
      setValidBudget(true)
      setmessage('')

      const result = updateUser(id, budgetNumber)

  }

  return (

    <ModalContent>
       
       <form  onSubmit={handlePresupuesto}>
            <div>
              <HeadingPomodoroTitle>Define your Budget</HeadingPomodoroTitle>

              <BudgetInput
              type='number'
              onChange = {(e) => {setBudgetNumber(parseInt(e.target.value))}}
              />
            </div>
            <SettingButton
              type='submit'
            >Give me more!</SettingButton>

       </form>
    </ModalContent>
   
  )
}

export default NewBudget

const ModalContent = styled.div`

  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  border-radius: 45px 15px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -15%;
  left: 25%;
  


`;

const BudgetInput = styled(StyledInput)`
  font-size: 4rem;
  color: black;
  text-shadow: none;
  box-shadow: none;
  `;

