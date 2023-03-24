import { StyledButton } from '@/public/styles';
import { Card, TextField, Grid } from '@mui/material';
import React, { useState } from 'react'
StyledButton
const ChatForm = ({generateResponse}) => {

    const [newQuestion, setNewQuestion] = useState('');

    return (
        <Card>
            <Grid
                width={500}
                container
                flexDirection={'column'}
            >

            <TextField
                placeholder="Chat with us!"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
            ></TextField>
            <StyledButton className="btn" onClick={() => generateResponse(newQuestion, setNewQuestion)}>
                  Send!
            </StyledButton>

            </Grid>
           
        </Card>
    )
}


export default ChatForm