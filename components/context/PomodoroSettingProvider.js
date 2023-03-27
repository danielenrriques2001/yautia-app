import { Typography } from "@mui/material";
import { useState, createContext, useEffect } from "react";
import styled, {keyframes} from "styled-components";
import { bounceInDown } from 'react-animations';
import { ToastContainer, toast } from 'react-toastify';
import useSound from 'use-sound';


const bounceAnimation = keyframes`${bounceInDown}`;


const TimerHeading = styled.h1`
    font-family: 'Lobster Two';
    font-weight: 900;
    font-size: 100px;
    text-align: center;

    text-shadow: 3px 4px 7px rgba(81,67,21,0.8);
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

    const [message, setMessage ] = useState(false)

    const [pomodoro, setPomodoro] = useState(0)

    //
    const [executing, setExecuting] = useState({})

    const [startAnimate, setStartAnimate] = useState(false)

    const [play, {stop}] = useSound('/alarm.wav',{ volume: 0.25 });

    
    const handleToast = (pomodoro) => {

        if(pomodoro.active === 'work') {
            toast.success('Take a Break, you Deserve it!')
        }
        if(executing.active === 'long'|| 
              executing.active === 'short' ) {
                 toast.warn('Better Work Bitch!')
              }


        toast.clearWaitingQueue();
       setTimeout(() => {
            setMessage(false)
       }, 1000);
    
    }
    //This is the timer of the Pomodoro
    // ! Initializes as 0

    function setCurrentTimer(active_state) {
        updateExecute({
            ...executing,
            active: active_state
        })

        // console.log('Executing', executing)
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
    
    return (
    
    <TimerHeading variant="h1">{minutes}:{seconds}
    {
    seconds == 0 && minutes == 0 ? setAlarmResponse(true) : setAlarmResponse(false)
    }
    {
     message && handleToast(executing)
    }
    </TimerHeading>)
   
    }

    // clear session storage 
    const SettingsBtn = () => {
        setExecuting({});
        setPomodoro(0);
    }

    const updateExecute = updatedSettings => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)

        // console.log(updatedSettings)
    }

    const setTimerTime = (Executing) => {

        switch (Executing.active) {
            case 'work':
                setPomodoro(Executing.work)
                break;
            case 'short':
                setPomodoro(Executing.short)
                break;
            case 'long':
                setPomodoro(Executing.long)
                break;
                default:
                    setPomodoro(0)
                break;
        }
    }

    function stopAnimate() {
        setStartAnimate(false)
    }

    function setAlarmResponse(boolean) {

        if(boolean === true) {
            setMessage(true)
            play()
        }
        if(boolean === false) {
            setMessage(false)
            
            stop();
        }

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