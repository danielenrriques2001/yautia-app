import styled from 'styled-components'
import { Button, Container, Grid, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { PomodoroContext} from '../context/PomodoroSettingProvider'



const StyledSettingButton = styled(Button)`
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  

&:after {
  background-color: #111;
  border-radius: 8px;
  content: "";
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform .2s ease-out;
  z-index: -1;
}

&:hover:after {
  transform: translate(0, 0);
}

&:active {
  background-color: #ffdeda;
  outline: 0;
}

&:hover {
  outline: 0;
  color: white;
}

@media (min-width: 768px) {
    padding: 0 40px;

}
`;

const StyledInput = styled.input`

  margin: 0;
  border:  10px solid #BAF6C4;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  text-align: center;
  transition: all ease-in .3s;
  cursor: pointer;

  margin-bottom: 45px;

  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 800;
  font-size: 120px;

  outline: none;


  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }

    &:hover, 
    &:active, 
    &:focus {
        border: #e06666 1px solid;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        text-shadow: 3px 4px 7px rgba(81,67,21,0.8);
        color: #e06666;

    }

`;

const StyledLabel = styled.label`

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    font-weight: 500;

`;

const SettingContainer = styled.div`
  
    display: flex;
    align-items: center;
    justify-content: center;



    @media (max-width: 768px) {
    flex-direction: column;
  }


`;

const SetPomodoro = () => {

    const [newTimer, setNewTimer] = useState({
        work: 0,
        short: 0,
        long: 0,
        active: 'work'
    })

    const [long, setLong] = useState(false)
    const [short, setShort] = useState(false)
    const [work, setWork] = useState(false)

    const {updateExecute} = useContext(PomodoroContext)

    const handleChange = input => {
        
        const {name, value} = input.target

        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: Number(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: Number(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: Number(value)
                })
                break;
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    return (
        <div className="form-container">
            <form noValidate onSubmit={handleSubmit}>
                <SettingContainer>

                    <Grid 
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      width = 'fit-content'
                    >
                    <StyledLabel htmlFor='work'>Work</StyledLabel>
                    <StyledInput
                        type="number" 
                        name="work" 
                        id='work'
                        onChange={handleChange} 
                        defaultValue={newTimer.work}
                        label = {'Work'}
                        style={{ backgroundImage: work ? `url(/work-cat.jpg)` : 'none' }}
                        onFocus ={ () => {setWork(true)}}
                        onBlur = {() => {setWork(false)}}
                        onMouseOver={ () => {setWork(true)}}
                        />
                    </Grid>

                    <Grid 
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      width = 'fit-content'
                    >
                    <StyledLabel htmlFor='shortBreak'>Short Break</StyledLabel>
                    <StyledInput
                        type="number" 
                        name="shortBreak" 
                        onChange={handleChange} 
                        defaultValue={newTimer.short}
                        id = 'shortBreak'
                        style={{ backgroundImage: short ? `url(/short-break.jpg)` : 'none' }}
                        onFocus ={ () => {setShort(true)}}
                        onBlur = {() => {setShort(false)}}
                        onMouseOver={ () => {setShort(true)}}
                        />
                    </Grid>

                    <Grid 
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      width = 'fit-content'
                    >
                    <StyledLabel htmlFor='longBreak'>Long Break</StyledLabel>
                    <StyledInput
                        type="number" 
                        name="longBreak" 
                        onChange={handleChange} 
                        defaultValue={newTimer.long}
                        id = 'longBreak'
                        style={{ backgroundImage: long ? `url(/long-break.jpg)` : 'none' }}
                        onFocus ={ () => {setLong(true)}}
                        onBlur = {() => {setLong(false)}}
                        onMouseOver={ () => {setLong(true)}}
                    />
                    </Grid>
                </SettingContainer>
                <Grid
                    container
                    justifyContent='center'
                >
                    <StyledSettingButton type='submit'>Set Timer</StyledSettingButton>
                </Grid>
                
            </form>
        </div>
    )
}

export default SetPomodoro;
