import {TextField, Button, Grid, Typography, Alert } from '@mui/material';
import styled, {keyframes} from 'styled-components';
import { pulse } from 'react-animations';

import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { HeadingPomodoroTitle, LinkNavigationContainer, PauseButton } from '@/public/styles';
import PacmanLoader from "react-spinners/PacmanLoader";


const Form = () => {

  const pulseAnimation = keyframes`${pulse}`;

  const LoadingLabel = styled(HeadingPomodoroTitle)`
  
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
    const budget = 0; 
  

    if (isLogin) {

      setIsLoading(true)

      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      });

      console.log('after login data', result)
      
      
      if (!result.error || !result.status === 40) {
        // set some auth state
        router.replace('/');


        setIsLoading(false)

        setErrorMessage('')
      } else {
        setErrorMessage(result.error)
      }


    } else {
      try {

        setIsLoading(true)

        const result = await createUser(name, email, password, budget);
       
        const resultSignUp  = await signIn('credentials', {
          redirect: false,
          email: email,
          password: password,
        });


        if (!result.error) {
          // set some auth state
          setIsLoading(false)

          router.replace('/');
        }

      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  }

  return (

    <>
       
        <StyledForm onSubmit={submitHandler}>
        <HeadingPomodoroTitle
          slogan
          Weight = {300}
          Size = {3}
          LetterSpace = {.25}

        
        >{isLogin ? `You're back!` : 'Welcome!'}
        
        </HeadingPomodoroTitle>
{
  !isLogin &&
      <TextField
      style={{ width: "600px", margin: "5px" }}
      type="name"
      label={'name'}
      variant="outlined"
      id='name'
      required  = {!isLogin ? false : true}
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
    required  = {!isLogin ? false : true}
  />
<br />

<br />
<PauseButton 
  type='submit'
  BGColor = {'#EB455F'}
  Bstyle = {'none'}
  FontSize = {1.3}
  FontWeight  = {300}
  BRadius = {4}
  TextColor = {'black'}
  >
{isLogin ? 'Login' : 'Create Account'}
</PauseButton>
<PauseButton 
  type='button' 
  onClick={switchAuthModeHandler}
  FontWeight = {300}
  FontSize = {1.3}
  MTop = {5}
  TextColor = {'black'}
  BGColor = {'#7E4851'}
  >
{isLogin ? 'Create new account' : 'Login with existing account'}
</PauseButton>

{

isLoading && <LinkNavigationContainer
                Display = {'flex'}
                FlexDirection = {'column'}
            >
              <PacmanLoader color = {'#353739'}/>
              <LoadingLabel
                Weight = {800}
                Size = {2}
              >{ isLogin ? 'Looking your Profile' : 'Your Account is being Created'}
              </LoadingLabel>
            </LinkNavigationContainer>
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
    
    
    </>
    
  )
}

export default Form


const StyledForm = styled.form`
    width: fit-content;
    text-align: center;
    background-color: white; 
    padding: 45px;
    padding-top: 100px;
    padding-bottom: 100px;
    border-radius: 45px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    transition: all .5s ease-in-out;
    border: 9px  rgba(214, 229, 227, 0.1) solid;


    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      transform: translateY(-15px);
    }

`;