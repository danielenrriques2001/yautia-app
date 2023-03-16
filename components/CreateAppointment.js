import {TextField, Button, Grid, Typography, Alert, FormControl } from '@mui/material';
import styled, {keyframes} from 'styled-components';
import { pulse } from 'react-animations';


import { useState, useRef, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { SettingButton } from '@/public/styles';
import { getDisplayName } from 'next/dist/shared/lib/utils';

import { useSession } from 'next-auth/react'


const CreateAppointment = () => {

const { data: session, status } = useSession()


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
  

    const result = await makeAppointment({title, description, date, user});

    
       
  }

  return (

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
          label={'title'}
          variant="outlined"
          id='title'
          defaultValue={''}
          required
    />
    <TextField
          style={{ width: "600px", margin: "5px" }}
          type="text"
          label={'description'}
          variant="outlined"
          id='description'
          defaultValue={''}
          
          required
    />
    <TextField
          style={{ width: "600px", margin: "5px" }}
          type="text"
          label={'date'}
          variant="outlined"
          id='date'
          defaultValue={''}
          required
    />


    
    <Grid
      marginBottom={1}
    >
    <SettingButton type='submit' variant="contained" color="primary"  
    >Add it!</SettingButton>
    </Grid>

    
    </form>


  )
}

export default CreateAppointment;

