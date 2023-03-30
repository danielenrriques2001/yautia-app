import { SettingButton, ModalContent, EditButton, PauseButton} from '@/public/styles'
import { Grid, Select, TextField, MenuItem, InputLabel, Modal} from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router';

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

const BudgetForm = ({id, open, handleClose, EditingItem, setEditingItem , isEditingExpense}) => {

  const router = useRouter();

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


  async function updateExpense(id, data) {
    const response = await fetch(`/api/budget/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => console.log("SUCCESS:: "+ res.json()))
      .catch(e => console.log("ERROR:" + e))
  }
  
  async function submitHandler(event) {

    event.preventDefault();
    const formElements = event.target;
    const name = formElements.name.value;
    const cost = formElements.cost.value;
    const category = formElements.category.value;    
    const date = new Date();
    const user = id; 

    if(isEditingExpense) {
      const result = updateExpense(EditingItem.id, {name, cost, category})
       
      handleClose();
      router.push('/services/budget')

      

      return; 
    }
    const result = createExpense({name, cost, category, date, user});
      handleClose()
      router.push('/services/budget')




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
    
    >
    <TextField
          style={{ width: "600px", margin: "5px" }}
          type="text"
          label={'name'}
          variant="outlined"
          id='name'
          defaultValue={EditingItem?.name}
    />

    <TextField
          style={{ width: "600px", margin: "5px" }}
          type="number"
          label={'cost'}
          variant="outlined"
          id='cost'
          defaultValue={EditingItem?.cost}
    />
     <InputLabel id="category">Category</InputLabel>


     <StyledSelect name="category" id="category" defaultValue={EditingItem?.category}>
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
      marginBottom={'1rem'}
      marginTop = {1}
    >
    <PauseButton 
      type='submit'
      BGColor = {'#BAD7E9'}
      FontSize = {2}
      FontWeight = {500}
      Width = {30}


    >Add it!</PauseButton>
    </Grid>

    
    </form>

        
      </ModalContent>

        



    </Modal>


  )
}

export default BudgetForm