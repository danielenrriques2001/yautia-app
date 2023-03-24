import {TextField, Button, Grid, Typography, Alert } from '@mui/material';
import styled, {keyframes} from 'styled-components';
import { pulse } from 'react-animations';


import { useState, useRef, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { HeadingPomodoroTitle, SettingButton } from '@/public/styles';
import PacmanLoader from "react-spinners/PacmanLoader";

const ButtonLogin = styled.button`

  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;


&:hover,
&:focus {
  opacity: .75;
}

`;




const ButtonCreate = styled.button`

  --b: 3px;   /* border thickness */
  --s: .45em; /* size of the corner */
  --color: #373B44;
  
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: #353739;
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 18px;


&:hover,
&:focus-visible{
  --_p: 0px;
  outline-color: var(--color);
  outline-offset: .05em;
}

&:active {
  background: var(--color);
  color: #353739;
}



`;

const HeadingLogin = styled(HeadingPomodoroTitle)`
  color: #353739;
`;

const StyledTextField = styled(TextField)`


`;

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
        router.replace('/profile');


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

          router.replace('/profile');
        }

      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  }

  return (

    <>
       
        <StyledForm onSubmit={submitHandler}>
        <HeadingLogin>{isLogin ? `You're back!` : 'Welcome!'}</HeadingLogin>
{
  !isLogin &&
      <StyledTextField
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
<StyledTextField
      style={{ width: "600px", margin: "5px" }}
      type="email"
      label={'email'}
      variant="outlined"
      id='email'
      required = {!isLogin ? false : true}
      defaultValue={''}
    />
<br/>

<StyledTextField
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
<ButtonLogin type='submit' variant="contained" color="primary">
{isLogin ? 'Login' : 'Create Account'}
</ButtonLogin>
<ButtonCreate type='button' onClick={switchAuthModeHandler}>
{isLogin ? 'Create new account' : 'Login with existing account'}
</ButtonCreate>

{

isLoading && <Grid
            container 
            justifyContent={'center'}
            alignItems = {'center'}
            flexDirection = {'column'}

            >
              <PacmanLoader color = {'#353739'}/>
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