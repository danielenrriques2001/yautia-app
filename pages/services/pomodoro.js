import SetPomodoro from '@/components/Pomodoro/SetPomodoro';
import CountdownAnimation from '@/components/Pomodoro/CountDownAnimation';
import { SettingsContext } from '@/components/context/PomodoroSettingProvider';

import { Typography, Button } from '@mui/material';
import { Container } from '@mui/system';
import React, {useContext, useEffect} from 'react'

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
        SettingsBtn } = useContext(SettingsContext)

        useEffect(() => {updateExecute(executing)}, [executing, startAnimate])


        return (
            <Container>
              <Typography variant='h5'>Pomodoro</Typography>
              <Typography variant='h6'>Be productive the right way.</Typography>
              {
              
              pomodoro !== 0 ?
              <>
                <ul>
                  <li>
                    <Button 
                      onClick={() => setCurrentTimer('work')} 
                    >
                    {'Work'}
                    </Button>
                  </li>
                  <li>
                    <Button onClick={() => setCurrentTimer('short')}>{'Short Break'}</Button>
                  </li>
                  <li>
                    <Button onClick={() => setCurrentTimer('long')}>{'Long Break'}</Button>
                  </li>
                </ul>
                <Button onClick={SettingsBtn}>Setting</Button> 


                <div className='timer-container'>
                  <div className='timer-wrapper'>
                      <CountdownAnimation
                            pomodoro={pomodoro} 
                            timer={pomodoro} 
                            animate={startAnimate}
                      >
                        {children}
                      </CountdownAnimation>
                  </div>
                </div>
                <div>
                  <Button onClick={startTimer}>{'Start'}</Button>
                  <Button onClick={pauseTimer}>{'Pause'}</Button>
                </div>
              </> 
              : <SetPomodoro />}
            </Container>
          )
}

export default PomodoroPage;

