import { SettingContainer, StyledLabel, StyledInput, StyledSettingButton } from '@/public/styles'
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
