import { SettingButton } from '@/public/styles'
import { Grid, Select, TextField, MenuItem, InputLabel, Modal} from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components';
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

const StyledSelect = styled.select`

  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);

`;

const BudgetForm = ({id, open, handleClose}) => {




  async function createExpense(expense) {

    const response = await fetch('/api/budget', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();

      if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }

    return data;
  }



  
  async function submitHandler(event) {
    event.preventDefault();

    
    const formElements = event.target;

    const name = formElements.name.value;
    const cost = formElements.cost.value;
    const category = formElements.category.value;    
    const date = new Date();
    const user = id; 
    const result = createExpense({name, cost, category, date, user});

    setTimeout(() => {

      handleClose()
    }, 1000);

  }




  return (

  
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >


      <ModalContent>

      <form 
          onSubmit={submitHandler}
      // container
      // flexDirection={'column'}
      // justifyContent = {'center'}
      // textAlign = {'center'}
    
    >
    <TextField
          style={{ width: "600px", margin: "5px" }}
          type="text"
          label={'name'}
          variant="outlined"
          id='name'
          // defaultValue={title}
    />
    <TextField
          style={{ width: "600px", margin: "5px" }}
          type="number"
          label={'cost'}
          variant="outlined"
          id='cost'
          // defaultValue={description}
    />
     <InputLabel id="category">Category</InputLabel>


     <StyledSelect name="category" id="category">
        <option value="saving" disabled>---------------Select---------------</option>
        <option value="saving">Savings</option>
        <option value="food">Food</option>
        <option value="home">Home</option>
        <option value="expenses">Expenses</option>
        <option value="hobby">Hobbies</option>
        <option value="health">Health</option>
        <option value="abo">Abos</option>
  
  </StyledSelect>


    
    <Grid
      marginBottom={1}
    >
    <SettingButton type='submit' variant="contained" color="primary"  
    >Add it!</SettingButton>
    </Grid>

    
    </form>

        
      </ModalContent>

        



    </Modal>


  )
}

export default BudgetForm