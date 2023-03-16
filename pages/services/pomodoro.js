import React, {useContext, useEffect} from 'react'
import SetPomodoro from '@/components/Pomodoro/SetPomodoro';
import CountdownAnimation from '@/components/Pomodoro/CountDownAnimation';
import { PomodoroContext } from '@/components/context/PomodoroSettingProvider';
import { Container, Grid, Button, TextField } from '@mui/material';
import { HeadingContainer, HeadingNavButton, HeadingPomodoroTitle, ReponsiveGrid, SettingButton, StyledButton } from '../../public/styles';

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

        useEffect(() => {
          updateExecute(executing)}, 
          
        [executing, updateExecute])

        return (
            <Container>
              <HeadingContainer>
                <HeadingPomodoroTitle variant='h2'>Pomodoro</HeadingPomodoroTitle>
                <HeadingPomodoroTitle slogan variant='h6'>Be productive, {''}
                <span>Be you!</span>
                </HeadingPomodoroTitle>
              </HeadingContainer>
             
              {
              
              pomodoro !== 0 ?
              <>
                <ReponsiveGrid

              
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
                </ReponsiveGrid>

                <Grid
                  container
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                  marginTop={5}
                  gap = {2}
                >

                  <CountdownAnimation 
                            pomodoro={pomodoro} 
                            animate={startAnimate}
                      >
                        {children}
                  </CountdownAnimation>
                <ReponsiveGrid
                  container
                  justifyContent={'center'}
                >
                  <StyledButton 
                      selected={startAnimate ? true : false} onClick={startTimer}
                      >{'Start'}
                  </StyledButton>

                  <StyledButton  
                    selected={!startAnimate ? true : false}
                    onClick={pauseTimer}
                    >{'Pause'}
                    </StyledButton>

                </ReponsiveGrid>

                </Grid>
                     
                <Grid
                container
                justifyContent={'center'}
                marginTop = {3}
                >
                  <SettingButton onClick={SettingsBtn}>Create New</SettingButton> 
                </Grid>
                
              </> 
              : <SetPomodoro />}
            </Container>
          )
}

export default PomodoroPage;

