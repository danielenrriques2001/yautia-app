import Form from '@/components/Form'
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { HeadingPomodoroTitle } from '@/public/styles';
import randomColor from "randomcolor";
import { greetings } from 'random-greetings';
// <h1>Discover, <span class="underlined underline-clip">Sell</span><br>& Collect <span class="underlined underline-mask">Rare</span><br><span class="underlined underline-overflow">NFTs</span></h1>

const TextContainer = styled.div`

    width: 50%;
    border-radius: 45px;
    background-color: #FFDBE7;
    /* border:  #353739 solid 3px; */

    text-align: center;
    padding: 15px; 

    border-radius: 50%;
    transition: all 1s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    &:hover {
      box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    }
`;


const StyledTitle = styled(HeadingPomodoroTitle)`

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`;


const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [colorValue, setColorValue] = useState('blue')

  const router = useRouter();

  useEffect(() => {
    const color = randomColor();

    const interval = setInterval(() => setColorValue(color), 4000);
    return () => {
      clearInterval(interval);
    };
  }, [colorValue]);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/profile');
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (

    <Grid
      container
      margin={'45px'}

    >
            
             
             <TextContainer
              onMouseOver={() => {
                let color = randomColor();
                setColorValue(color)
              }}
              style={{
                backgroundColor: colorValue
               }} 
             >
              <Form/>

             </TextContainer>


             
    </Grid>


      
     
      );
}

export default Login;
