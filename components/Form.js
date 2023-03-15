import {TextField, Button, Grid, Typography, Alert } from '@mui/material';
import styled, {keyframes} from 'styled-components';
import { pulse } from 'react-animations';


import { useState, useRef, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import ReactLoading from 'react-loading';

const Form = () => {

  const pulseAnimation = keyframes`${pulse}`;

  // const emailInputRef = useRef();
  // const passwordInputRef = useRef();



  const LoadingLabel = styled(Typography)`
  
    animation: 1s infinite ${pulseAnimation};

  `;

  const [isLogin, setIsLogin] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  useEffect(() => {

    setTimeout(() => {
        setErrorMessage('')
    }, 5000);

    if(errorMessage) {
      setIsLoading(false)
    }
  }, [errorMessage])
  

  async function createUser(name, email, password) {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    console.log(data)
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

    const name = formElements.name.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
  

    if (isLogin) {

      setIsLoading(true)

      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      });

      
      
      if (!result.error) {
        // set some auth state
        router.replace('/profile');

        setIsLoading(false)

        setErrorMessage('')
      } else {
        setErrorMessage(result.error)
      }


    } else {
      try {

        setIsLoading(true)

        const result = await createUser(name, email, password);
       
        const resultSignUp  = await signIn('credentials', {
          redirect: false,
          email: email,
          password: password,
        });


        if (!result.error) {
          // set some auth state
          setIsLoading(false)

          router.replace('/profile');
        }

      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <StyledForm onSubmit={submitHandler}>

      {
        !isLogin &&
            <TextField
            style={{ width: "600px", margin: "5px" }}
            type="name"
            label={'name'}
            variant="outlined"
            id='name'
            focused
            required 
            defaultValue={''}
          />
      }
      <br/>
    <TextField
            style={{ width: "600px", margin: "5px" }}
            type="email"
            label={'email'}
            variant="outlined"
            id='email'
            required = {!isLogin ? false : true}
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

    {

      isLoading && <Grid
                  container 
                  justifyContent={'center'}
                  alignItems = {'center'}
                  flexDirection = {'column'}

                  >
                    <ReactLoading  type={'spinningBubbles'} color={'#9fc5e8'} height={'20%'} width={'20%'} />
                    <LoadingLabel variant='h5'>{ isLogin ? 'Looking your Profile' : 'Your Account is being Created'}</LoadingLabel>
                  </Grid>
    } 
    {
      errorMessage  && <Grid
                      container 
                      justifyContent={'center'}
                      alignItems = {'center'}
                      marginTop = {'15px'}
                      >
         <Alert severity = 'error'>{errorMessage}</Alert> 

     

      </Grid>
      
     
    }
      
  </StyledForm>
  )
}

export default Form


const StyledForm = styled.form`
text-align: center;

`;