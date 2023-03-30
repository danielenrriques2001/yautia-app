import {TextField, Button, Grid, Typography, Alert, FormControl } from '@mui/material';
import styled, {keyframes} from 'styled-components';
import { pulse } from 'react-animations';


import { useState, useRef, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { EditButton, PauseButton, SettingButton } from '@/public/styles';
import { getDisplayName } from 'next/dist/shared/lib/utils';

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';


const CreateAppointment = ({title, description, date, updateTermin, edit, id, handleClose}) => {

const { data: session, status } = useSession()

const router = useRouter();


  async function makeAppointment(appointment) {

    const response = await fetch('/api/appointment', {
      method: 'POST',
      body: JSON.stringify(appointment),
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

    const title = formElements.title.value;
    const description = formElements.description.value;
    const date = formElements.date.value;

    const user = session.user.email;
  

    if(edit) {
      const result = await updateTermin(id, {title, description, date})

      
    router.push('/services/appointment')
    handleClose();
      return;
    }

    const result = await makeAppointment({title, description, date, user});

    router.push('/services/appointment')
    handleClose();

    
    
  }

  return (

    <form 
    onSubmit={submitHandler}
    
    >
    <TextField
          style={{ width: "600px", margin: "5px" }}
          type="text"
          label={'title'}
          variant="outlined"
          id='title'
          defaultValue={title}
    />
    <TextField
          style={{ width: "600px", margin: "5px" }}
          type="text"
          label={'description'}
          variant="outlined"
          id='description'
          defaultValue={description}
          multiline
          rows={4}
          maxRows={2}

    />
    <TextField
          style={{ width: "600px", margin: "5px" }}
          type="date"
          label={'date'}
          variant="outlined"
          id='date'
          defaultValue={date}
          InputLabelProps={{ shrink: true }} 
    />


    
    <Grid
      marginBottom={1}
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


  )
}

export default CreateAppointment;

