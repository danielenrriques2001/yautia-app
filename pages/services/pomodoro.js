import styled, { keyframes } from 'styled-components';
import SetPomodoro from '@/components/Pomodoro/SetPomodoro';
import CountdownAnimation from '@/components/Pomodoro/CountDownAnimation';
import { PomodoroContext } from '@/components/context/PomodoroSettingProvider';
import { bounce } from 'react-animations'

import { Typography, Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, {useContext, useEffect} from 'react'


const fadeInAnimation = keyframes`${bounce}`;

const SettingButton = styled.button`
  
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


  

&:hover {
  background-color: #fff;
}

&:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {

    min-width: 120px;
    padding: 0 25px;
}

`;

const StyledButton = styled.button`

  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;


&:hover,
&:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

&:hover {
  transform: translateY(-1px);
}

&:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}

`;

const PauseButton = styled.button`

  background: #FFFFFF;
  border: 0 solid #E2E8F0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  color: #1A202C;
  display: inline-flex;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  height: 56px;
  justify-content: center;
  line-height: 24px;
  overflow-wrap: break-word;
  padding: 24px;
  text-decoration: none;
  width: auto;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  border: 1px solid black;


`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  animation: 1s ${fadeInAnimation};
  padding: 45px;

  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  border-radius: 45px;
  
  border:  1px gray ;
  padding-bottom: 0;
  margin-bottom: 35px;

`;

const HeadingNavButton = styled(Button)`

  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background: ${props => props.selected ? "#fbeee0" : "white"};
&:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
    padding: 0.25em 0.75em;
}
`;


const PomodoroPage = () => {

    const {
        pomodoro,
        executing,
        startAnimate,
        children,
        startTimer,
        pauseTimer,
        updateExecute,
        setCurrentTimer,
        SettingsBtn } = useContext(PomodoroContext)

        useEffect(() => {updateExecute(executing)}, [executing, startAnimate])




        return (
            <Container>
              <HeadingContainer>
                <Typography variant='h2'>Pomodoro</Typography>
                <Typography variant='h6'>Be productive, {''}
                <span>Be you!</span>
                </Typography>
              </HeadingContainer>
             
              {
              
              pomodoro !== 0 ?
              <>
                <Grid
                  container
                  justifyContent='center'
                  gap= '15px'
              
                >
                    <HeadingNavButton 
                      selected={executing.active === 'work' ? true : false}
                      onClick={() => setCurrentTimer('work')} 
                    >
                    {'Work'}
                    </HeadingNavButton>
                    <HeadingNavButton   
                      selected={executing.active === 'short' ? true : false}
                      onClick={() => setCurrentTimer('short')}>{'Short Break'}</HeadingNavButton>
                    <HeadingNavButton 
                      selected={executing.active === 'long' ? true : false}
                      onClick={() => {setCurrentTimer('long')}}>{'Long Break'}</HeadingNavButton>
                </Grid>

                <Grid
                  container
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                  marginTop={5}
                >

                  <CountdownAnimation 
                            pomodoro={pomodoro} 
                            animate={startAnimate}
                      >
                        {children}
                  </CountdownAnimation>
                <Grid
                  container
                  justifyContent={'center'}
                >
                  <StyledButton onClick={startTimer}>{'Start'}</StyledButton>
                  <StyledButton onClick={pauseTimer}>{'Pause'}</StyledButton>
                </Grid>

                </Grid>
                     
                <Grid
                container
                justifyContent={'center'}
                marginTop = {3}
                >
                  <SettingButton onClick={SettingsBtn}>Setting</SettingButton> 
                </Grid>
                
              </> 
              : <SetPomodoro />}
            </Container>
          )
}

export default PomodoroPage;

