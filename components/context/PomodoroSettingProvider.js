import { Typography } from "@mui/material";
import { useState, createContext } from "react";
import {Roboto} from 'next/font/google';
import styled, {keyframes} from "styled-components";
import { bounceInDown } from 'react-animations';

const bounceAnimation = keyframes`${bounceInDown}`;


const TimerHeading = styled.h1`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
    font-size: 100px;
    text-align: center;
`;

const TimerAlertHeading = styled.p`
    font-size: 20px;
    font-weight: 100;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    animation: 1s ${bounceAnimation} infinite;

`;

//Create a Context for the settings
export const PomodoroContext = createContext();


const PomodoroContextProvider = (props) => {


    //This is the timer of the Pomodoro
    // ! Initializes as 0
    const [pomodoro, setPomodoro] = useState(0)

    //
    const [executing, setExecuting] = useState({})

    const [startAnimate, setStartAnimate] = useState(false)

    function setCurrentTimer (active_state) {
        updateExecute({
            ...executing,
            active: active_state
        })

        setTimerTime(executing)
    }

    // start animation fn 
    function startTimer() {
        setStartAnimate(true)
    }
    // pause animation fn 
    function pauseTimer() {
    setStartAnimate(false)
    }
    // pass time to counter 
    const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    
    return <TimerHeading variant="h1">{minutes}:{seconds}
    {
    seconds == 0 && minutes == 0 ? <TimerAlertHeading>{executing.active === 'work' ? 'Take a Break... ' : 'Better Work Bitch!'}</TimerAlertHeading> : ''
    }
    </TimerHeading>
   
    }

    // clear session storage 
    const SettingsBtn = () => {
        setExecuting({});
        setPomodoro(0);
    }

    const updateExecute = updatedSettings => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    const setTimerTime = (evaluate) => {

        console.log(evaluate)

        switch (evaluate.active) {
            case 'work':
                setPomodoro(evaluate.work)
                break;
            case 'short':
                setPomodoro(evaluate.short)
                break;
            case 'long':
                setPomodoro(evaluate.long)
                break;
                default:
                    setPomodoro(0)
                break;
        }
    }

    function stopAnimate() {
        setStartAnimate(false)
    }

    return (
        <PomodoroContext.Provider value={{
            pomodoro, 
            executing,
            updateExecute, 
            startAnimate, 
            startTimer,
            pauseTimer,
            children,
            SettingsBtn,
            setCurrentTimer,
            stopAnimate
        }}>
            {props.children}
        </PomodoroContext.Provider>
    )

}

export default PomodoroContextProvider