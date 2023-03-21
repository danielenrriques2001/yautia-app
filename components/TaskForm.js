import { SettingButton } from '@/public/styles'
import { Grid, Select, TextField, MenuItem, InputLabel, Modal} from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router';
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

const StyledForm = styled.form`
    
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    width: fit-content;
    padding: 45px;

    border-top-left-radius: 4em; 
    border-top-right-radius: 4em; 

`;

const TaskForm = ({id, isEditingItem , EditingItem}) => {




  const router = useRouter();

  async function createTask(task) {

    const response = await fetch('/api/task', {
      method: 'POST',
      body: JSON.stringify(task),
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


  async function updateTask(id, data) {
    const response = await fetch(`/api/task/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => console.log("SUCCESS:: "+ res.json()))
      .catch(e => console.log("ERROR:" + e))


      setTimeout(() => {
        router.reload('/services/tasks')
    }, 1000);
    
  }
  
  async function submitHandler(event) {
    event.preventDefault();

    
    const formElements = event.target;

    const name = formElements.name.value;
    const description = formElements.description.value;
    const category = formElements.category.value;    
    const date = new Date();
    const user = id; 
    const completed = false;



    
    
    if(isEditingItem) {
      const result = updateTask(EditingItem.id, {name, description, category})
  
      // setTimeout(() => {
      //   router.reload('/services/budget')
      // }, 1000);

      return; 
    }
    const result = createTask({name, description, category, date, user, completed});

    formElements.reset();


  }




  return (

      <StyledForm 
          onSubmit={submitHandler}
      // container
      // flexDirection={'column'}
      // justifyContent = {'center'}
      // textAlign = {'center'}
    
    >
    <TextField
         
          style={{ width: "600px", margin: "5px" }}
          type="text"
          label={'task'}
          variant="outlined"
          id='name'
          defaultValue={isEditingItem ? EditingItem.name : ''}
          key={EditingItem.name} 

    />
    <TextField
          defaultValue={isEditingItem ? EditingItem.description : ''}
          style={{ width: "600px", margin: "5px" }}
          type="text"
          label={'description'}
          variant="outlined"
          id='description'
          multiline
          rows={4}
          key={EditingItem.description} 

        //   defaultValue={cost}
       
    />
     <InputLabel id="category">Category</InputLabel>


     <StyledSelect name="category" id="category" defaultValue={isEditingItem && EditingItem.category }  key={EditingItem.category} >
        <option value=" " disabled>---------------Select---------------</option>
        <option value="personal">Personal</option>
        <option value="business">Business</option>
        <option value="family">Family</option>
  </StyledSelect>

    
    
    <Grid
      marginBottom={1}
    >
    <SettingButton type='submit' variant="contained" color="primary"  
    >Do it!</SettingButton>
    </Grid>

    
    </StyledForm>

        


  )
}

export default TaskForm