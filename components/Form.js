import {TextField, Button } from '@mui/material';
import styled from 'styled-components';

import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const Form = () => {

  // const emailInputRef = useRef();
  // const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  async function createUser(email, password) {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
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

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const formElements = event.target;

    const email = formElements.email.value;
    const password = formElements.password.value;


    // optional: Add validation

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      });

      if (!result.error) {
        // set some auth state
        router.replace('/profile');
      }
    } else {
      try {
        const result = await createUser(email, password);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <StyledForm onSubmit={submitHandler}>

    <TextField
            style={{ width: "600px", margin: "5px" }}
            type="email"
            label={'email'}
            variant="outlined"
            id='email'
            focused
            required
            defaultValue={''}
          />
      <br/>

    <TextField
      style={{ width: "600px", margin: "5px" }}
      type="password"
      label={'password'}
      variant="outlined"
      id='password'
      defaultValue={''}
      required
    />
    <br />

    <br />
    <Button type='submit' variant="contained" color="primary">
    {isLogin ? 'Login' : 'Create Account'}
    </Button>
    <Button type='button' onClick={switchAuthModeHandler}>
    {isLogin ? 'Create new account' : 'Login with existing account'}
    </Button>
  </StyledForm>
  )
}

export default Form


const StyledForm = styled.form`
text-align: center;

`;