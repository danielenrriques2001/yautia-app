import React, {useContext, useEffect} from 'react'
import SetPomodoro from '@/components/Pomodoro/SetPomodoro';
import CountdownAnimation from '@/components/Pomodoro/CountDownAnimation';
import { PomodoroContext } from '@/components/context/PomodoroSettingProvider';
import { Container, Grid, Button, TextField } from '@mui/material';
import { HeadingContainer, HeadingNavButton, HeadingPomodoroTitle, ReponsiveGrid, SettingButton, StyledButton, PauseButton, FloatingButton} from '../../public/styles';

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
                <HeadingPomodoroTitle
                  Size = {5}
                  Weight = {300}
                  Color = {'#2B3467'}
                >Pomodoro</HeadingPomodoroTitle>

                <HeadingPomodoroTitle 
                  slogan
                  Size = {2}
                
                >Be productive, {''}
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
                  flexDirection={'column'}
                  justifyContent={'center'}
                >
                  <PauseButton 
                      selected={startAnimate ? true : false} onClick={startTimer}
                      BGColor = {'#F5A2A'}
                      TextColor = {'black'}
                      FontSize = {2}
                      FontWeight = {300}
                      MTop = {1}
                      Width = {30}
                      >{'Start'}
                  </PauseButton>

                  <PauseButton  
                    selected={!startAnimate ? true : false}
                    onClick={pauseTimer}
                    BGColor = {'#B2B2B2'}
                    TextColor = {'black'}
                    FontSize = {2}
                    FontWeight = {300}
                    MTop = {10}
                    Width = {30}
                    >{'Pause'}
                    </PauseButton>

                </ReponsiveGrid>

                </Grid>
                     
                <Grid
                container
                justifyContent={'center'}
                marginTop = {3}
                >
                  <FloatingButton onClick={SettingsBtn}>Create New</FloatingButton> 
                </Grid>
                
              </> 
              : <SetPomodoro />}
            </Container>
          )
}

export default PomodoroPage;

