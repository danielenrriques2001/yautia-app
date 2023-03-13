import { Button, Container, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/PomodoroSettingProvider'

const SetPomodoro = () => {

    const [newTimer, setNewTimer] = useState({
        work: 0.2,
        short: 0.1,
        long: 0.5,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingsContext)

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
                <Container>
                    <TextField 
                        type="number" 
                        name="work" 
                        onChange={handleChange} 
                        defaultValue={newTimer.work}
                        label = {'Work'}
                        InputLabelProps={{ shrink: true }} 
                        />
                        

                    <TextField 
                        type="number" 
                        name="shortBreak" 
                        onChange={handleChange} 
                        defaultValue={newTimer.short} 
                        label = {'Short Break'}
                        InputLabelProps={{ shrink: true }} 
                        />

                    <TextField  
                        type="number" 
                        name="longBreak" 
                        onChange={handleChange} 
                        defaultValue={newTimer.long} 
                        label = {'Long Break'}
                        InputLabelProps={{ shrink: true }} 
                        />
                        
                </Container>
                <Button type='submit'>Set Timer</Button>
            </form>
        </div>
    )
}

export default SetPomodoro;