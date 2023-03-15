import { SettingContainer, StyledLabel, StyledInput, StyledSettingButton } from '@/pages/Styles'
import React, { useContext, useState } from 'react'
import { PomodoroContext} from '../context/PomodoroSettingProvider'
import { Grid } from '@mui/material'


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
