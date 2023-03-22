import { SettingButton } from '@/public/styles'
import { Grid, Select, TextField, MenuItem, InputLabel, Modal} from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useSWR, { mutate } from "swr";

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

const TaskForm = ({id, isEditingItem , EditingItem, setIsEditingItem}) => {

  console.log(isEditingItem)

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const tasks = useSWR(`/api/task/${id}`, fetcher)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
 

  useEffect(() => {

    if(isEditingItem) {
      setName(EditingItem.name ?? '')
      setDescription(EditingItem.description ?? '')
      setCategory(EditingItem.category ?? '')
    }
  }, [isEditingItem, EditingItem])
  



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

      setIsEditingItem(false)
      console.log(isEditingItem)
  
    }  else {

    

      const result = createTask({name, description, category, date, user, completed});
      
    }

   


    setName('')
    setCategory('')
    setDescription('')
    router.push('/services/tasks')
   

    


    


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
          defaultValue={isEditingItem ? EditingItem.name : ''}
          // key={isEditingItem ? EditingItem.name : ''} 
          style={{ width: "600px", margin: "5px" }}
          type="text"
          label={'task'}
          variant="outlined"
          id='name'
          value = {name}
          onChange={(e) => {setName(e.target.value)}}



    />
    <TextField
          defaultValue={isEditingItem ? EditingItem.description : ''}
          // key={isEditingItem ? EditingItem.description : ''}
          value = {description}
          onChange={(e) => {setDescription(e.target.value)}}
          style={{ width: "600px", margin: "5px" }}
          type="text"
          label={'description'}
          variant="outlined"
          id='description'
          multiline
          rows={4}
         

        //   defaultValue={cost}
       
    />
     <InputLabel id="category">Category</InputLabel>


     <StyledSelect 
     name="category" 
     id="category" 
     defaultValue={isEditingItem ? EditingItem.category : '' }   
     value = {category}
     onChange={(e) => {setCategory(e.target.value)}}
    >
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